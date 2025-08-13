import React, { useState, useEffect } from 'react';
import WebApi from '../Services/WebApi';

const DebuggerPage = () => {
    const [liveState, setLiveState] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            WebApi.getLiveState()
                .then(data => {
                    setLiveState(data);
                    setError(null);
                })
                .catch(err => {
                    setError('Failed to fetch live state. Is the device connected?');
                    console.error(err);
                });
        }, 100); // Poll every 100ms

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const renderState = () => {
        if (error) {
            return <p style={{ color: 'red' }}>{error}</p>;
        }

        if (!liveState) {
            return <p>Waiting for data...</p>;
        }

        return (
            <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
                <h3>Gamepad State</h3>
                <p>Buttons: {liveState.buttons?.toString(2).padStart(32, '0')}</p>
                <p>DPad:    {liveState.dpad?.toString(2).padStart(8, '0')}</p>
                <p>LX: {liveState.lx} | LY: {liveState.ly}</p>
                <p>RX: {liveState.rx} | RY: {liveState.ry}</p>
                <p>LT: {liveState.lt} | RT: {liveState.rt}</p>
                <h3>Motion Sensors</h3>
                <p>Accel X: {liveState.accel_x} | Accel Y: {liveState.accel_y} | Accel Z: {liveState.accel_z}</p>
                <p>Gyro X:  {liveState.gyro_x}  | Gyro Y:  {liveState.gyro_y}  | Gyro Z:  {liveState.gyro_z}</p>
                <h3>GPIO Pins (Raw)</h3>
                <p>{liveState.gpio?.toString(2).padStart(30, '0')}</p>
            </div>
        );
    };

    return (
        <div>
            <h1>Live Input Debugger</h1>
            <p>This page shows the real-time state of the controller's inputs and GPIO pins as seen by the firmware.</p>
            <hr />
            {renderState()}
        </div>
    );
};

export default DebuggerPage;
