import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormCheck, Row } from 'react-bootstrap';
import * as yup from 'yup';
import Section from '../Components/Section';
import FormControl from '../Components/FormControl';

// Define the Yup validation schema for the addon
export const ds4UartBridgeScheme = {
	DS4UARTBridgeEnabled: yup.number().required().label('DS4 UART Bridge Enabled'),
	ds4uarttx: yup
		.number()
		.label('TX Pin')
		.validatePinWhenValue('DS4UARTBridgeEnabled'),
	ds4uartrx: yup
		.number()
		.label('RX Pin')
		.validatePinWhenValue('DS4UARTBridgeEnabled')
        .test('is-not-same-as-tx', 'RX pin must be different from TX pin', function (value) {
            return this.parent.ds4uarttx !== value;
        }),
};

// Define the initial state for the addon's form data
export const ds4UartBridgeState = {
	DS4UARTBridgeEnabled: 0,
	ds4uarttx: -1,
	ds4uartrx: -1,
};

// Create the React component
const DS4UARTBridge = ({ values, errors, handleChange, handleCheckbox }) => {
	const { t } = useTranslation();

	return (
		<Section title={t('AddonsConfig:ds4-uart-bridge-header-text')}>
			<div id="DS4UARTBridgeOptions" hidden={!values.DS4UARTBridgeEnabled}>
				<Row className="mb-3">
                    <FormControl
						type="number"
						label={t('AddonsConfig:ds4-uart-bridge-tx-pin-label')}
						name="ds4uarttx"
						className="form-control-sm"
						groupClassName="col-sm-3 mb-3"
						value={values.ds4uarttx}
						error={errors.ds4uarttx}
						isInvalid={errors.ds4uarttx}
						onChange={handleChange}
						min={-1}
						max={29}
					/>
                    <FormControl
						type="number"
						label={t('AddonsConfig:ds4-uart-bridge-rx-pin-label')}
						name="ds4uartrx"
						className="form-control-sm"
						groupClassName="col-sm-3 mb-3"
						value={values.ds4uartrx}
						error={errors.ds4uartrx}
						isInvalid={errors.ds4uartrx}
						onChange={handleChange}
						min={-1}
						max={29}
					/>
				</Row>
                <Row>
                    <p>{t('AddonsConfig:ds4-uart-bridge-sub-header-text')}</p>
                </Row>
			</div>
			<FormCheck
				label={t('Common:switch-enabled')}
				type="switch"
				id="DS4UARTBridgeButton"
				reverse
				isInvalid={false}
				checked={Boolean(values.DS4UARTBridgeEnabled)}
				onChange={(e) => {
					handleCheckbox('DS4UARTBridgeEnabled', values);
					handleChange(e);
				}}
			/>
		</Section>
	);
};

export default DS4UARTBridge;
