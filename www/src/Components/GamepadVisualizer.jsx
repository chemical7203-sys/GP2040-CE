import React from 'react';
import './GamepadVisualizer.scss';

// Button mapping from GamepadState
const buttonMap = {
    B1: { mask: 1 << 0, label: 'B1' },
    B2: { mask: 1 << 1, label: 'B2' },
    B3: { mask: 1 << 2, label: 'B3' },
    B4: { mask: 1 << 3, label: 'B4' },
    L1: { mask: 1 << 4, label: 'L1' },
    R1: { mask: 1 << 5, label: 'R1' },
    L2: { mask: 1 << 6, label: 'L2' },
    R2: { mask: 1 << 7, label: 'R2' },
    S1: { mask: 1 << 8, label: 'S1' },
    S2: { mask: 1 << 9, label: 'S2' },
    L3: { mask: 1 << 10, label: 'L3' },
    R3: { mask: 1 << 11, label: 'R3' },
    A1: { mask: 1 << 12, label: 'A1' },
    A2: { mask: 1 << 13, label: 'A2' },
};

const dpadMap = {
    UP:    { mask: 1 << 0 },
    DOWN:  { mask: 1 << 1 },
    LEFT:  { mask: 1 << 2 },
    RIGHT: { mask: 1 << 3 },
};

const GamepadVisualizer = ({ state, title }) => {
    if (!state) {
        return <div className="gamepad-visualizer-container"><h4>{title}</h4><p>No data.</p></div>;
    }

    const isButtonPressed = (button) => (state.buttons & buttonMap[button].mask) !== 0;
    const isDpadPressed = (dir) => (state.dpad & dpadMap[dir].mask) !== 0;

    // Convert analog stick values (0-65535) to a percentage for positioning
    const stickToPercent = (val) => ((val / 65535) * 100).toFixed(2);
    const triggerToPercent = (val) => ((val / 255) * 100).toFixed(2);

    return (
        <div className="gamepad-visualizer-container">
            <h4>{title}</h4>
            <div className="gamepad-body">
                {/* D-Pad */}
                <div className="dpad">
                    <div className={`dpad-button up ${isDpadPressed('UP') ? 'pressed' : ''}`}></div>
                    <div className={`dpad-button down ${isDpadPressed('DOWN') ? 'pressed' : ''}`}></div>
                    <div className={`dpad-button left ${isDpadPressed('LEFT') ? 'pressed' : ''}`}></div>
                    <div className={`dpad-button right ${isDpadPressed('RIGHT') ? 'pressed' : ''}`}></div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <div className={`action-button b1 ${isButtonPressed('B1') ? 'pressed' : ''}`}>B1</div>
                    <div className={`action-button b2 ${isButtonPressed('B2') ? 'pressed' : ''}`}>B2</div>
                    <div className={`action-button b3 ${isButtonPressed('B3') ? 'pressed' : ''}`}>B3</div>
                    <div className={`action-button b4 ${isButtonPressed('B4') ? 'pressed' : ''}`}>B4</div>
                </div>

                {/* Analog Sticks */}
                <div className="analog-sticks">
                    <div className="stick-container">
                        <div className="stick-outer">
                            <div className="stick-inner" style={{ left: `${stickToPercent(state.lx)}%`, top: `${stickToPercent(state.ly)}%` }}></div>
                        </div>
                        <span className="stick-label">LX: {state.lx}, LY: {state.ly}</span>
                    </div>
                    <div className="stick-container">
                        <div className="stick-outer">
                            <div className="stick-inner" style={{ left: `${stickToPercent(state.rx)}%`, top: `${stickToPercent(state.ry)}%` }}></div>
                        </div>
                        <span className="stick-label">RX: {state.rx}, RY: {state.ry}</span>
                    </div>
                </div>

                {/* Shoulder/Trigger Buttons */}
                <div className="shoulder-buttons">
                    <div className={`shoulder-button l1 ${isButtonPressed('L1') ? 'pressed' : ''}`}>L1</div>
                    <div className={`shoulder-button r1 ${isButtonPressed('R1') ? 'pressed' : ''}`}>R1</div>
                    <div className="trigger-container l2">
                        <span>L2: {state.lt}</span>
                        <div className="trigger-bar-outer"><div className="trigger-bar-inner" style={{ width: `${triggerToPercent(state.lt)}%` }}></div></div>
                    </div>
                     <div className="trigger-container r2">
                        <span>R2: {state.rt}</span>
                        <div className="trigger-bar-outer"><div className="trigger-bar-inner" style={{ width: `${triggerToPercent(state.rt)}%` }}></div></div>
                    </div>
                </div>

                {/* Center Buttons */}
                <div className="center-buttons">
                    <div className={`center-button s1 ${isButtonPressed('S1') ? 'pressed' : ''}`}>S1</div>
                    <div className={`center-button s2 ${isButtonPressed('S2') ? 'pressed' : ''}`}>S2</div>
                    <div className={`center-button a1 ${isButtonPressed('A1') ? 'pressed' : ''}`}>A1</div>
                </div>

            </div>
            <div className="motion-data">
                <h5>Motion Sensors</h5>
                <p>Accel: ({state.accel_x}, {state.accel_y}, {state.accel_z})</p>
                <p>Gyro:  ({state.gyro_x}, {state.gyro_y}, {state.gyro_z})</p>
            </div>
        </div>
    );
};

export default GamepadVisualizer;
