#include "addons/ds4uartbridge.h"
#include "storagemanager.h"
#include "pico/time.h"
#include "hardware/irq.h"
#include "addons/uart_override.h" // Include the new global override header

bool DS4UARTBridgeAddon::available() {
    // This addon is always available if enabled in the config
    return true;
}

void DS4UARTBridgeAddon::setup() {
    const DS4UARTBridgeOptions& options = Storage::getInstance().getAddonOptions().ds4UartBridgeOptions;
    if (!options.enabled || options.rxPin == -1 || options.txPin == -1) return;

    gpio_set_function(options.rxPin, GPIO_FUNC_UART);
    gpio_set_function(options.txPin, GPIO_FUNC_UART);
    uart_init(UART_ID, BAUD_RATE);

    instance = this;
    irq_set_exclusive_handler(UART0_IRQ, uart_irq_handler);
    irq_set_enabled(UART0_IRQ, true);
    uart_set_irq_enables(UART_ID, true, false);

    last_uart_message_time = to_ms_since_boot(get_absolute_time());
    g_uart_input_override = false; // Ensure override is off at the start
}

void DS4UARTBridgeAddon::process() {
    const DS4UARTBridgeOptions& options = Storage::getInstance().getAddonOptions().ds4UartBridgeOptions;
    if (!options.enabled) {
        g_uart_input_override = false;
        return;
    }

    // Timeout check: If no message received for 100ms, disable override
    if (g_uart_input_override && (to_ms_since_boot(get_absolute_time()) - last_uart_message_time > 100)) {
        g_uart_input_override = false;
    }
}

void DS4UARTBridgeAddon::read() {
    if (!uart_is_readable(UART_ID)) {
        return;
    }

    uint8_t buffer[sizeof(UARTMessage)];
    uart_read_blocking(UART_ID, buffer, 1); // Read start byte first

    if (buffer[0] == UART_MESSAGE_START_BYTE) {
        // Read the rest of the message
        uart_read_blocking(UART_ID, &buffer[1], sizeof(UARTMessage) - 1);

        UARTMessage msg;
        memcpy(&msg, buffer, sizeof(msg));

        uint8_t checksum = 0;
        uint8_t* state_ptr = (uint8_t*)&msg.state;
        for (size_t i = 0; i < sizeof(GamepadState); i++) {
            checksum += state_ptr[i];
        }

        if (checksum == msg.checksum) {
            // Data is valid, update global state and set override flag
            memcpy((void*)&g_uart_gamepad_state, &msg.state, sizeof(GamepadState));
            g_uart_input_override = true;
            last_uart_message_time = to_ms_since_boot(get_absolute_time());
        }
    }
}

// Static members definition
DS4UARTBridgeAddon* DS4UARTBridgeAddon::instance = nullptr;

void IRAM_ATTR DS4UARTBridgeAddon::uart_irq_handler() {
    if (instance) {
        instance->read();
    }
}
