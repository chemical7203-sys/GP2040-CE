#pragma once

#include "addons/addon.h"
#include "GamepadEnums.h"
#include "gamepad.h"
#include "pico/stdlib.h"
#include "pico/uart.h"

#ifndef DS4_UART_BRIDGE_ADDON_ENABLED
#define DS4_UART_BRIDGE_ADDON_ENABLED 0
#endif

#ifndef DS4_UART_RX_PIN
#define DS4_UART_RX_PIN -1
#endif

#ifndef DS4_UART_TX_PIN
#define DS4_UART_TX_PIN -1
#endif

#define UART_ID uart0
#define BAUD_RATE 115200
#define UART_MESSAGE_START_BYTE 0xDC

#pragma pack(push, 1)
typedef struct {
    uint8_t start_byte;
    GamepadState state;
    uint8_t checksum;
} UARTMessage;
#pragma pack(pop)

class DS4UARTBridgeAddon : public Addon {
public:
    virtual void setup() override;
    virtual void process() override; // Add process method to check for timeout
    static void IRAM_ATTR uart_irq_handler();

private:
    void read();
    static DS4UARTBridgeAddon* instance;
    volatile uint32_t last_uart_message_time = 0;
};
