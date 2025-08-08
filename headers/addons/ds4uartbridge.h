#ifndef _DS4UARTBRIDGEADDON_H_
#define _DS4UARTBRIDGEADDON_H_

#include "gpaddon.h"

// DS4 specific data structure might be needed here in the future
// For now, we rely on the core GamepadState

class DS4UARTBridgeAddon : public GPAddon {
public:
	virtual bool available() override;
	virtual void setup() override;
	virtual void preprocess() override;
	virtual void process() override;
    virtual void postprocess(bool) override;
	virtual std::string name() override { return "DS4_UART_Bridge"; }
    virtual void reinit() override {};

private:
    // UART configuration and state variables will go here
};

#endif  // _DS4UARTBRIDGEADDON_H_
