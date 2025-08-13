#ifndef _DS4UARTBRIDGEADDON_H_
#define _DS4UARTBRIDGEADDON_H_

#include "gpaddon.h"
#include "pico/time.h"

// This structure must be defined in the header so the compiler knows its size
// for the update_state method signature. It must match the Python script's packing.
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

class DS4UARTBridgeAddon : public GPAddon {
public:
	virtual bool available() override;
	virtual void setup() override;
	virtual void preprocess() override;
	virtual void process() override;
    virtual void postprocess(bool) override;
	virtual std::string name() override { return "DS4 UART Bridge"; }
    virtual void reinit() override {};

    void update_state(const UARTData& data);

private:
    absolute_time_t last_packet_timestamp;
    static const uint32_t uart_timeout_ms = 100;
};

#endif  // _DS4UARTBRIDGEADDON_H_
