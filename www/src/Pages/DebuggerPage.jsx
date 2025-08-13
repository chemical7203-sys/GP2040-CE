import React, { useState, useEffect, useRef } from 'react';
import WebApi from '../Services/WebApi';

const DebuggerPage = () => {
    const [liveState, setLiveState] = useState(null);
    const [error, setError] = useState(null);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);

    // useRef to hold the interval timer ID to prevent re-renders from creating multiple timers
    const intervalRef = useRef(null);

    const fetchData = () => {
        console.log("Debugger: Fetching live state...");
        WebApi.getLiveState()
            .then(data => {
                if (data) {
                    console.log("Debugger: Data received:", data);
                    setLiveState(data);
                    setError(null);
                    setLastUpdateTime(new Date().toLocaleTimeString());
                } else {
                    console.warn("Debugger: Received empty or invalid data from API.");
                    setError("Received empty data from device.");
                }
            })
            .catch(err => {
                console.error("Debugger: API call failed.", err);
                setError('Failed to fetch live state. Check console (F12) for errors.');
            });
    };

    useEffect(() => {
        // Start polling when the component mounts
        intervalRef.current = setInterval(fetchData, 200); // Poll every 200ms for stability

        // Stop polling when the component unmounts
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); // Empty dependency array means this runs only once on mount

    const renderStateColumn = (title, state) => {
        if (!state) return <div><h4>{title}</h4><p>No data.</p></div>;
        
        const columnStyle = {
            width: '48%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            wordWrap: 'break-word'
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

    return (
        <div>
            <h1>Live Input Debugger</h1>
            <p>This page shows the real-time state of the controller's inputs, both before and after processing by the firmware. Last Update: {lastUpdateTime || 'N/A'}</p>
            <hr />
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            {!liveState && !error && <p>Waiting for initial data from device...</p>}
            {liveState && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', whiteSpace: 'pre' }}>
                    {renderStateColumn("Raw State (From Addon/Pins)", liveState.rawState)}
                    {renderStateColumn("Processed State (To Console)", liveState.processedState)}
                </div>
            )}
            <hr />
            {liveState && liveState.gpio !== undefined && (
                <div>
                    <h3>GPIO Pins (Raw)</h3>
                    <p>{liveState.gpio?.toString(2).padStart(30, '0')}</p>
                </div>
            )}
        </div>
    );
};

export default DebuggerPage;