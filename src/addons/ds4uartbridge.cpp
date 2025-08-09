#include "addons/ds4uartbridge.h"
#include "storagemanager.h"
#include "hardware/uart.h"
#include "hardware/gpio.h"
#include "pico/stdlib.h"
#include "config.pb.h"

#define UART_ID uart0
#define BAUDRATE 115200 // Higher baud rate might be needed for motion data
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

bool DS4UARTBridgeAddon::available() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    return options.has_ds4UartBridgeOptions && options.ds4UartBridgeOptions.enabled;
}

void DS4UARTBridgeAddon::setup() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    if (!available()) {
        return;
    }
    const DS4UARTBridgeOptions& uartOptions = options.ds4UartBridgeOptions;

    uart_init(UART_ID, BAUDRATE);
    gpio_set_function(uartOptions.txPin, GPIO_FUNC_UART);
    gpio_set_function(uartOptions.rxPin, GPIO_FUNC_UART);
}

void DS4UARTBridgeAddon::preprocess() {
    if (!available()) {
        return;
    }

    if (uart_is_readable(UART_ID) && uart_getc(UART_ID) == START_BYTE) {
        uint8_t buffer[sizeof(UARTData) - 1];

        bool success = true;
        for (size_t i = 0; i < sizeof(buffer); ++i) {
            if (uart_is_readable_within_us(UART_ID, 2000)) { // 2ms timeout per byte
                buffer[i] = uart_getc(UART_ID);
            } else {
                success = false;
                break;
            }
        }

        if (success) {
            UARTData receivedData;
            receivedData.startByte = START_BYTE;
            memcpy((uint8_t*)&receivedData + 1, buffer, sizeof(buffer));

            uint8_t checksum = 0;
            uint8_t* p = (uint8_t*)&receivedData;
            for (size_t i = 0; i < sizeof(UARTData) - 1; ++i) {
                checksum ^= p[i];
            }

            if (checksum == receivedData.checksum) {
                Gamepad *gamepad = Storage::getInstance().GetGamepad();

                // Buttons and Sticks
                gamepad->state.buttons = receivedData.buttons;
                gamepad->state.lx = receivedData.lx;
                gamepad->state.ly = receivedData.ly;
                gamepad->state.rx = receivedData.rx;
                gamepad->state.ry = receivedData.ry;
                gamepad->state.lt = receivedData.lt;
                gamepad->state.rt = receivedData.rt;

                // D-pad from button mask
                gamepad->state.dpad = 0;
                if (gamepad->state.buttons & GAMEPAD_MASK_UP) gamepad->state.dpad |= GAMEPAD_MASK_UP;
                if (gamepad->state.buttons & GAMEPAD_MASK_DOWN) gamepad->state.dpad |= GAMEPAD_MASK_DOWN;
                if (gamepad->state.buttons & GAMEPAD_MASK_LEFT) gamepad->state.dpad |= GAMEPAD_MASK_LEFT;
                if (gamepad->state.buttons & GAMEPAD_MASK_RIGHT) gamepad->state.dpad |= GAMEPAD_MASK_RIGHT;

                // Motion Sensors
                gamepad->state.accel_x = receivedData.accel_x;
                gamepad->state.accel_y = receivedData.accel_y;
                gamepad->state.accel_z = receivedData.accel_z;
                gamepad->state.gyro_x = receivedData.gyro_x;
                gamepad->state.gyro_y = receivedData.gyro_y;
                gamepad->state.gyro_z = receivedData.gyro_z;
            }
        }
    }
}

void DS4UARTBridgeAddon::process() {}
void DS4UARTBridgeAddon::postprocess(bool reportSent) {}
