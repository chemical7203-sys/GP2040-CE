# Project Context: DS4 UART Passthrough

## 1. Project Goal

The primary goal is to customize the GP2040-CE firmware to act as a hardware passthrough for a DualShock 4 (DS4) controller connected to a PC.

- A Python script on a PC reads input data (including 6-axis gyro/accelerometer) from a locally connected DS4 controller.
- This data is sent over a UART (serial) connection to the GP2040-CE device.
- The GP2040-CE firmware receives this UART data and uses it to **completely override** its own physical hardware inputs (buttons/joysticks).
- The overridden input data is then sent to the game console (e.g., PS4, Nintendo Switch) as if it were coming from the GP2040-CE device itself.

## 2. Final Implementation Architecture (Global Override Method)

Early attempts to modify the `Gamepad` class directly failed because its header file (`gamepad.h`) was not present in the source tree, likely being generated during compilation. This led to a "Global Override" strategy.

The implementation consists of three main parts:

### a. The Addon (`DS4UARTBridgeAddon`)
- **Files:** `src/addons/ds4uartbridge.h`, `src/addons/ds4uartbridge.cpp`
- **Purpose:** Manages the UART communication and controls the override state.
- **Logic:**
    - Initializes UART on the pins specified in the web configurator.
    - An **Interrupt Service Routine (ISR)** listens for incoming serial data.
    - When a valid data packet is received, the ISR writes the controller data to a **global state variable** (`g_uart_gamepad_state`) and sets a **global flag** (`g_uart_input_override = true`).
    - The addon's `process()` loop contains a **100ms timeout**. If no new data arrives within 100ms, it sets `g_uart_input_override = false`, allowing the device to revert to its physical hardware inputs.

### b. The Global Override Mechanism
- **File:** `src/addons/uart_override.h`
- **Purpose:** To create a communication channel between the addon and the core input system without modifying the core class definition.
- **Contents:**
    - `volatile bool g_uart_input_override`: The master flag that signals whether to use UART data or hardware data.
    - `volatile GamepadState g_uart_gamepad_state`: A global struct that holds the latest controller data received from the UART.

### c. The Core Input Injection Point
- **File:** `src/gamepad.cpp`
- **Purpose:** To intercept the hardware input reading process.
- **Modification:**
    - The function `Gamepad::read()` is the target. This function is responsible for reading the GPIO pins.
    - A check was added at the **very beginning** of this function:
        - `if (g_uart_input_override)` is true, it copies the data from `g_uart_gamepad_state` into the instance's local `state` and immediately `return`s.
        - This effectively bypasses all subsequent code in the function that reads from the physical hardware.

## 3. Other Modifications

- **Web Configurator:**
    - **Addon Page:** A new entry was added to `src/www/src/Pages/AddonsConfigPage.jsx` and `src/www/src/Data/Addons.js` to allow enabling the addon and setting RX/TX pins. The UI component is `src/www/src/Components/Addons/DS4UARTBridge.tsx`.
    - **Debugger Page:** A new page was created at `src/www/src/Pages/DebuggerPage.jsx` with a corresponding API endpoint in `src/webconfig.cpp` (`/api/getLiveState`) to show real-time controller state for diagnostics. (Note: The `rawState` part of this debugger is now obsolete due to the architectural change, but `processedState` is still valid).

- **PC Tool:**
    - `tools/ds4_uart_sender.py`: A Python GUI script to read from an HID device (DS4) and send the data over the selected serial port.

## 4. Current Status (As of last session)

The user reported that the feature was still not working as expected ("loading seems to not be working") and requested to save the current progress in a PR to continue debugging in a future session. All the code for the "Global Override" method described above has been written and submitted. The next task will likely be to debug why this implementation is not working on the user's end (e.g., build issues, hardware issues, or a remaining logical bug).
