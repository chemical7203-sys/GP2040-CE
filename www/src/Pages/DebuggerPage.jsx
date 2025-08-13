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

    const renderStateColumn = (title, state) => {
        if (!state) return null;

        const columnStyle = {
            width: '48%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        };

        return (
            <div style={columnStyle}>
                <h4>{title}</h4>
                <p>Buttons: {state.buttons?.toString(2).padStart(32, '0')}</p>
                <p>DPad:    {state.dpad?.toString(2).padStart(8, '0')}</p>
                <p>LX: {state.lx} | LY: {state.ly}</p>
                <p>RX: {state.rx} | RY: {state.ry}</p>
                <p>LT: {state.lt} | RT: {state.rt}</p>
                <hr/>
                <h5>Motion Sensors</h5>
                <p>Accel X: {state.accel_x} | Accel Y: {state.accel_y} | Accel Z: {state.accel_z}</p>
                <p>Gyro X:  {state.gyro_x}  | Gyro Y:  {state.gyro_y}  | Gyro Z:  {state.gyro_z}</p>
            </div>
        );
    };

    const renderGpio = () => {
        if (!liveState || liveState.gpio === undefined) return null;
        return (
            <div>
                <h3>GPIO Pins (Raw)</h3>
                <p>{liveState.gpio?.toString(2).padStart(30, '0')}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Live Input Debugger</h1>
            <p>This page shows the real-time state of the controller's inputs, both before and after processing by the firmware.</p>
            <hr />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!liveState && !error && <p>Waiting for data...</p>}
            {liveState && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', whiteSpace: 'pre' }}>
                    {renderStateColumn("Raw State (from Addon/Pins)", liveState.rawState)}
                    {renderStateColumn("Processed State (to Console)", liveState.processedState)}
                </div>
            )}
            <hr />
            {renderGpio()}
        </div>
    );
};

export default DebuggerPage;
