#include "addons/ds4uartbridge.h"
#include "addons/uart_override.h" // Include the new override header
#include "storagemanager.h"
#include "hardware/uart.h"
#include "hardware/irq.h"
#include "pico/stdlib.h"
#include "config.pb.h"
#include "gamepad.h"

// Define the global override variables declared in the header
volatile bool g_uart_input_override = false;
volatile GamepadState g_uart_gamepad_state;

// UART details
#define UART_ID uart0
#define BAUDRATE 115200
#define START_BYTE 0xA5

// The UARTData struct is now in the header file

static UARTData uart_data_packet;
static uint8_t uart_data_buffer[sizeof(UARTData)];
static size_t uart_data_index = 0;

// Pointer to the addon instance for the ISR
static DS4UARTBridgeAddon* instance = nullptr;

// UART Interrupt Service Routine
void on_uart_rx() {
    if (!instance) return;

    while (uart_is_readable(UART_ID)) {
        uint8_t ch = uart_getc(UART_ID);

        if (ch == START_BYTE) {
            uart_data_index = 0;
        }

        if (uart_data_index < sizeof(UARTData)) {
            uart_data_buffer[uart_data_index++] = ch;
        }

        if (uart_data_index == sizeof(UARTData)) {
            memcpy(&uart_data_packet, uart_data_buffer, sizeof(UARTData));
            uart_data_index = 0; // Reset for the next packet

            uint8_t calculated_checksum = 0;
            uint8_t* p = (uint8_t*)&uart_data_packet;
            for (size_t i = 0; i < sizeof(UARTData) - 1; ++i) {
                calculated_checksum ^= p[i];
            }

            if (calculated_checksum == uart_data_packet.checksum) {
                instance->update_state(uart_data_packet);
            }
        }
    }
}

void DS4UARTBridgeAddon::update_state(const UARTData& data) {
    g_uart_gamepad_state.buttons = data.buttons;
    g_uart_gamepad_state.lx = data.lx;
    g_uart_gamepad_state.ly = data.ly;
    g_uart_gamepad_state.rx = data.rx;
    g_uart_gamepad_state.ry = data.ry;
    g_uart_gamepad_state.lt = data.lt;
    g_uart_gamepad_state.rt = data.rt;

    g_uart_gamepad_state.dpad = 0;
    if (data.buttons & GAMEPAD_MASK_UP)    g_uart_gamepad_state.dpad |= GAMEPAD_MASK_UP;
    if (data.buttons & GAMEPAD_MASK_DOWN)  g_uart_gamepad_state.dpad |= GAMEPAD_MASK_DOWN;
    if (data.buttons & GAMEPAD_MASK_LEFT)  g_uart_gamepad_state.dpad |= GAMEPAD_MASK_LEFT;
    if (data.buttons & GAMEPAD_MASK_RIGHT) g_uart_gamepad_state.dpad |= GAMEPAD_MASK_RIGHT;

    g_uart_gamepad_state.accel_x = data.accel_x;
    g_uart_gamepad_state.accel_y = data.accel_y;
    g_uart_gamepad_state.accel_z = data.accel_z;
    g_uart_gamepad_state.gyro_x = data.gyro_x;
    g_uart_gamepad_state.gyro_y = data.gyro_y;
    g_uart_gamepad_state.gyro_z = data.gyro_z;

    g_uart_input_override = true;
    last_packet_timestamp = get_absolute_time();
}

bool DS4UARTBridgeAddon::available() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    return options.has_ds4UartBridgeOptions && 
           options.ds4UartBridgeOptions.enabled &&
           options.ds4UartBridgeOptions.txPin != -1 &&
           options.ds4UartBridgeOptions.rxPin != -1;
}

void DS4UARTBridgeAddon::setup() {
    instance = this;
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    const DS4UARTBridgeOptions& uartOptions = options.ds4UartBridgeOptions;

    uart_init(UART_ID, BAUDRATE);
    gpio_set_function(uartOptions.txPin, GPIO_FUNC_UART);
    gpio_set_function(uartOptions.rxPin, GPIO_FUNC_UART);

    last_packet_timestamp = nil_time; // Initialize with a zero-like value

    int UART_IRQ = (UART_ID == uart0) ? UART0_IRQ : UART1_IRQ;
    irq_set_exclusive_handler(UART_IRQ, on_uart_rx);
    irq_set_enabled(UART_IRQ, true);
    uart_set_irq_enables(UART_ID, true, false);
}

void DS4UARTBridgeAddon::preprocess() {
    if (g_uart_input_override && !is_nil_time(last_packet_timestamp)) {
        absolute_time_t now = get_absolute_time();
        if (absolute_time_diff_us(last_packet_timestamp, now) / 1000 > uart_timeout_ms) {
            g_uart_input_override = false;
        }
    }
}

void DS4UARTBridgeAddon::process() {
    // Nothing needed here
}

void DS4UARTBridgeAddon::postprocess(bool reportSent) {
    // Nothing needed here
}