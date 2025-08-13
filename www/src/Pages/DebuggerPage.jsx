import React, { useState, useEffect, useRef } from 'react';
import WebApi from '../Services/WebApi';
import GamepadVisualizer from '../Components/GamepadVisualizer'; // Import the new component

const DebuggerPage = () => {
    const [liveState, setLiveState] = useState(null);
    const [error, setError] = useState(null);
    const [lastUpdateTime, setLastUpdateTime] = useState(null);

    const intervalRef = useRef(null);

    const fetchData = () => {
        WebApi.getLiveState()
            .then(data => {
                if (data) {
                    setLiveState(data);
                    setError(null);
                    setLastUpdateTime(new Date().toLocaleTimeString());
                } else {
                    setError("Received empty data from device.");
                }
            })
            .catch(err => {
                console.error("Debugger: API call failed.", err);
                setError('Failed to fetch live state. Check console (F12) for errors.');
                // Stop polling on error to prevent spamming the console
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            });
    };

    useEffect(() => {
        // Start polling when the component mounts
        intervalRef.current = setInterval(fetchData, 100); // Poll every 100ms for better responsiveness

        // Stop polling when the component unmounts
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div>
            <h1>Live Input Debugger</h1>
            <p>
                This page shows a real-time graphical representation of the controller's inputs.
                Last Update: {lastUpdateTime || 'N/A'}
            </p>
            <hr />
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            {!liveState && !error && <p>Waiting for initial data from device...</p>}
            {liveState && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <GamepadVisualizer state={liveState.rawState} title="Raw State (From Addon/Pins)" />
                    <GamepadVisualizer state={liveState.processedState} title="Processed State (To Console)" />
                </div>
            )}
        </div>
    );
};

export default DebuggerPage;