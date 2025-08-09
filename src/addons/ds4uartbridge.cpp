#include "addons/ds4uartbridge.h"
#include "storagemanager.h"
#include "hardware/uart.h"
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
    uint8_t checksum;
};
#pragma pack(pop)

bool DS4UARTBridgeAddon::available() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    return options.ds4UartBridgeOptions.enabled;
}

void DS4UARTBridgeAddon::setup() {
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    const DS4UARTBridgeOptions& uartOptions = options.ds4UartBridgeOptions;

    if (!uartOptions.enabled || uartOptions.txPin < 0 || uartOptions.rxPin < 0) {
        return;
    }

    uart_init(UART_ID, BAUDRATE);
    gpio_set_function(uartOptions.txPin, GPIO_FUNC_UART);
    gpio_set_function(uartOptions.rxPin, GPIO_FUNC_UART);
}

void DS4UARTBridgeAddon::preprocess() {
    // Intentionally commented out for debugging the build.
    // We are testing if an empty function allows the project to compile.
    /*
    const AddonOptions& options = Storage::getInstance().getAddonOptions();
    if (!options.ds4UartBridgeOptions.enabled) {
        return;
    }

    if (uart_is_readable(UART_ID) && uart_getc(UART_ID) == START_BYTE) {
        uint8_t buffer[sizeof(UARTData) - 1];
        size_t bytes_read = uart_read_blocking(UART_ID, buffer, sizeof(buffer));

        if (bytes_read == sizeof(buffer)) {
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

                gamepad->state.dpad = 0;
                gamepad->state.buttons = 0;

                gamepad->state.buttons = receivedData.buttons;
                gamepad->state.lx = receivedData.lx;
                gamepad->state.ly = receivedData.ly;
                gamepad->state.rx = receivedData.rx;
                gamepad->state.ry = receivedData.ry;
                gamepad->state.lt = receivedData.lt;
                gamepad->state.rt = receivedData.rt;

                if (gamepad->state.buttons & GAMEPAD_MASK_UP) gamepad->state.dpad |= GAMEPAD_MASK_UP;
                if (gamepad->state.buttons & GAMEPAD_MASK_DOWN) gamepad->state.dpad |= GAMEPAD_MASK_DOWN;
                if (gamepad->state.buttons & GAMEPAD_MASK_LEFT) gamepad->state.dpad |= GAMEPAD_MASK_LEFT;
                if (gamepad->state.buttons & GAMEPAD_MASK_RIGHT) gamepad->state.dpad |= GAMEPAD_MASK_RIGHT;
            }
        }
    }
    */
}

void DS4UARTBridgeAddon::process() {
    // Nothing to do here for now, logic is in preprocess
}

void DS4UARTBridgeAddon::postprocess(bool reportSent) {
    // Nothing to do here for now
}
