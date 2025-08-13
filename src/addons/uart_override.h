#ifndef _UART_OVERRIDE_H_
#define _UART_OVERRIDE_H_

#include "gamepad/GamepadState.h"

// Global flag to signal that UART data should override physical inputs
extern volatile bool g_uart_input_override;

// Global struct to hold the gamepad state from the UART
extern volatile GamepadState g_uart_gamepad_state;

#endif  // _UART_OVERRIDE_H_
