#include "addons/ds4uartbridge.h"
#include "storagemanager.h"
#include "hardware/uart.h"
#include "hardware/irq.h"
#include "hardware/gpio.h"
#include "pico/stdlib.h"
#include "config.pb.h"

#define UART_ID uart0
#define BAUDRATE 115200
#define START_BYTE 0xA5

#pragma pack(push, 1)
struct UARTData {
    uint8_t startByte;
    uint32_t buttons;
    uint16_t lx, ly, rx, ry;
    uint8_t lt, rt;
    int16_t accel_x, accel_y, accel_z;
    int16_t gyro_x, gyro_y, gyro_z;
    uint8_t checksum;
};
#pragma pack(pop)

static UARTData uart_data_packet;
static uint8_t uart_data_buffer[sizeof(UARTData)];
static size_t uart_data_index = 0;

void on_uart_rx() {
    Gamepad *gamepad = Storage::getInstance().GetGamepad();
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
            uart_data_index = 0; // Reset for next packet

            uint8_t calculated_checksum = 0;
            uint8_t* p = (uint8_t*)&uart_data_packet;
            for (size_t i = 0; i < sizeof(UARTData) - 1; ++i) {
                calculated_checksum ^= p[i];
            }

            if (calculated_checksum == uart_data_packet.checksum) {
                gamepad->input_override = true; // Set the override flag
                
                gamepad->state.buttons = uart_data_packet.buttons;
                gamepad->state.lx = uart_data_packet.lx;
                gamepad->state.ly = uart_data_packet.ly;
                gamepad->state.rx = uart_data_packet.rx;
                gamepad->state.ry = uart_data_packet.ry;
                gamepad->state.lt = uart_data_packet.lt;
                gamepad->state.rt = uart_data_packet.rt;
                
                gamepad->state.dpad = 0;
                if (gamepad->state.buttons & GAMEPAD_MASK_UP) gamepad->state.dpad |= GAMEPAD_MASK_UP;
                if (gamepad->state.buttons & GAMEPAD_MASK_DOWN) gamepad->state.dpad |= GAMEPAD_MASK_DOWN;
                if (gamepad->state.buttons & GAMEPAD_MASK_LEFT) gamepad->state.dpad |= GAMEPAD_MASK_LEFT;
                if (gamepad->state.buttons & GAMEPAD_MASK_RIGHT) gamepad->state.dpad |= GAMEPAD_MASK_RIGHT;

                gamepad->state.accel_x = uart_data_packet.accel_x;
                gamepad->state.accel_y = uart_data_packet.accel_y;
                gamepad->state.accel_z = uart_data_packet.accel_z;
                gamepad->state.gyro_x = uart_data_packet.gyro_x;
                gamepad->state.gyro_y = uart_data_packet.gyro_y;
                gamepad->state.gyro_z = uart_data_packet.gyro_z;
            }
        }
    }
}

bool DS4UARTBridgeAddon::available() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    return options.has_ds4UartBridgeOptions && 
           options.ds4UartBridgeOptions.enabled &&
           options.ds4UartBridgeOptions.txPin != -1 &&
           options.ds4UartBridgeOptions.rxPin != -1;
}

void DS4UARTBridgeAddon::setup() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    if (!available()) { return; }
    const DS4UARTBridgeOptions& uartOptions = options.ds4UartBridgeOptions;

    gpio_set_function(uartOptions.txPin, GPIO_FUNC_NULL);
    gpio_set_function(uartOptions.rxPin, GPIO_FUNC_NULL);

    uart_init(UART_ID, BAUDRATE);
    gpio_set_function(uartOptions.txPin, GPIO_FUNC_UART);
    gpio_set_function(uartOptions.rxPin, GPIO_FUNC_UART);

    int UART_IRQ = (UART_ID == uart0) ? UART0_IRQ : UART1_IRQ;
    irq_set_exclusive_handler(UART_IRQ, on_uart_rx);
    irq_set_enabled(UART_IRQ, true);
    uart_set_irq_enables(UART_ID, true, false);
}

void DS4UARTBridgeAddon::preprocess() {
    // Before the main input loop reads the physical pins,
    // reset the override flag. The ISR will set it to true if a valid
    // UART packet has arrived for this frame.
    Gamepad *gamepad = Storage::getInstance().GetGamepad();
    gamepad->input_override = false;
}

void DS4UARTBridgeAddon::process() {
    // The Gamepad::process() function will be skipped if input_override is true.
    // We don't need to do anything extra here.
}

void DS4UARTBridgeAddon::postprocess(bool reportSent) {}