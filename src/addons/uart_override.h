#pragma once

#include "gamepad.h" // We need GamepadState definition

// Global state for UART override
// This is used to communicate between the DS4UARTBridgeAddon and the core Gamepad class
// without modifying the Gamepad class definition itself, which seems to be unavailable.
volatile bool g_uart_input_override = false;
volatile GamepadState g_uart_gamepad_state;
