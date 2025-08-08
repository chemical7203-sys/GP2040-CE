// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

export interface IGamepadOptions {
    inputMode?: (InputMode|null);
    dpadMode?: (DpadMode|null);
    socdMode?: (SOCDMode|null);
    invertXAxis?: (boolean|null);
    invertYAxis?: (boolean|null);
    switchTpShareForDs4?: (boolean|null);
    lockHotkeys?: (boolean|null);
    fourWayMode?: (boolean|null);
    profileNumber?: (number|null);
    ps4ControllerType?: (PS4ControllerType|null);
    debounceDelay?: (number|null);
    inputModeB1?: (number|null);
    inputModeB2?: (number|null);
    inputModeB3?: (number|null);
    inputModeB4?: (number|null);
    inputModeL1?: (number|null);
    inputModeL2?: (number|null);
    inputModeR1?: (number|null);
    inputModeR2?: (number|null);
    ps4ReportHack?: (boolean|null);
    ps4AuthType?: (InputModeAuthType|null);
    ps5AuthType?: (InputModeAuthType|null);
    xinputAuthType?: (InputModeAuthType|null);
    ps4ControllerIDMode?: (PS4ControllerIDMode|null);
    usbDescOverride?: (boolean|null);
    usbDescProduct?: (string|null);
    usbDescManufacturer?: (string|null);
    usbDescVersion?: (string|null);
    usbOverrideID?: (boolean|null);
    usbProductID?: (number|null);
    usbVendorID?: (number|null);
    miniMenuGamepadInput?: (number|null);
}

export class GamepadOptions implements IGamepadOptions {
    constructor(properties?: IGamepadOptions);
    public inputMode: InputMode;
    public dpadMode: DpadMode;
    public socdMode: SOCDMode;
    public invertXAxis: boolean;
    public invertYAxis: boolean;
    public switchTpShareForDs4: boolean;
    public lockHotkeys: boolean;
    public fourWayMode: boolean;
    public profileNumber: number;
    public ps4ControllerType: PS4ControllerType;
    public debounceDelay: number;
    public inputModeB1: number;
    public inputModeB2: number;
    public inputModeB3: number;
    public inputModeB4: number;
    public inputModeL1: number;
    public inputModeL2: number;
    public inputModeR1: number;
    public inputModeR2: number;
    public ps4ReportHack: boolean;
    public ps4AuthType: InputModeAuthType;
    public ps5AuthType: InputModeAuthType;
    public xinputAuthType: InputModeAuthType;
    public ps4ControllerIDMode: PS4ControllerIDMode;
    public usbDescOverride: boolean;
    public usbDescProduct: string;
    public usbDescManufacturer: string;
    public usbDescVersion: string;
    public usbOverrideID: boolean;
    public usbProductID: number;
    public usbVendorID: number;
    public miniMenuGamepadInput: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IKeyboardMapping {
    keyDpadUp?: (number|null);
    keyDpadDown?: (number|null);
    keyDpadLeft?: (number|null);
    keyDpadRight?: (number|null);
    keyButtonB1?: (number|null);
    keyButtonB2?: (number|null);
    keyButtonB3?: (number|null);
    keyButtonB4?: (number|null);
    keyButtonL1?: (number|null);
    keyButtonR1?: (number|null);
    keyButtonL2?: (number|null);
    keyButtonR2?: (number|null);
    keyButtonS1?: (number|null);
    keyButtonS2?: (number|null);
    keyButtonL3?: (number|null);
    keyButtonR3?: (number|null);
    keyButtonA1?: (number|null);
    keyButtonA2?: (number|null);
    keyButtonA3?: (number|null);
    keyButtonA4?: (number|null);
    keyButtonE1?: (number|null);
    keyButtonE2?: (number|null);
    keyButtonE3?: (number|null);
    keyButtonE4?: (number|null);
    keyButtonE5?: (number|null);
    keyButtonE6?: (number|null);
    keyButtonE7?: (number|null);
    keyButtonE8?: (number|null);
    keyButtonE9?: (number|null);
    keyButtonE10?: (number|null);
    keyButtonE11?: (number|null);
    keyButtonE12?: (number|null);
}

export class KeyboardMapping implements IKeyboardMapping {
    constructor(properties?: IKeyboardMapping);
    public keyDpadUp: number;
    public keyDpadDown: number;
    public keyDpadLeft: number;
    public keyDpadRight: number;
    public keyButtonB1: number;
    public keyButtonB2: number;
    public keyButtonB3: number;
    public keyButtonB4: number;
    public keyButtonL1: number;
    public keyButtonR1: number;
    public keyButtonL2: number;
    public keyButtonR2: number;
    public keyButtonS1: number;
    public keyButtonS2: number;
    public keyButtonL3: number;
    public keyButtonR3: number;
    public keyButtonA1: number;
    public keyButtonA2: number;
    public keyButtonA3: number;
    public keyButtonA4: number;
    public keyButtonE1: number;
    public keyButtonE2: number;
    public keyButtonE3: number;
    public keyButtonE4: number;
    public keyButtonE5: number;
    public keyButtonE6: number;
    public keyButtonE7: number;
    public keyButtonE8: number;
    public keyButtonE9: number;
    public keyButtonE10: number;
    public keyButtonE11: number;
    public keyButtonE12: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IHotkeyEntry {
    dpadMask?: (number|null);
    action?: (GamepadHotkey|null);
    buttonsMask?: (number|null);
    auxMask?: (number|null);
}

export class HotkeyEntry implements IHotkeyEntry {
    constructor(properties?: IHotkeyEntry);
    public dpadMask: number;
    public action: GamepadHotkey;
    public buttonsMask: number;
    public auxMask: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IHotkeyOptions {
    hotkey01?: (IHotkeyEntry|null);
    hotkey02?: (IHotkeyEntry|null);
    hotkey03?: (IHotkeyEntry|null);
    hotkey04?: (IHotkeyEntry|null);
    hotkey05?: (IHotkeyEntry|null);
    hotkey06?: (IHotkeyEntry|null);
    hotkey07?: (IHotkeyEntry|null);
    hotkey08?: (IHotkeyEntry|null);
    hotkey09?: (IHotkeyEntry|null);
    hotkey10?: (IHotkeyEntry|null);
    hotkey11?: (IHotkeyEntry|null);
    hotkey12?: (IHotkeyEntry|null);
    hotkey13?: (IHotkeyEntry|null);
    hotkey14?: (IHotkeyEntry|null);
    hotkey15?: (IHotkeyEntry|null);
    hotkey16?: (IHotkeyEntry|null);
}

export class HotkeyOptions implements IHotkeyOptions {
    constructor(properties?: IHotkeyOptions);
    public hotkey01?: (IHotkeyEntry|null);
    public hotkey02?: (IHotkeyEntry|null);
    public hotkey03?: (IHotkeyEntry|null);
    public hotkey04?: (IHotkeyEntry|null);
    public hotkey05?: (IHotkeyEntry|null);
    public hotkey06?: (IHotkeyEntry|null);
    public hotkey07?: (IHotkeyEntry|null);
    public hotkey08?: (IHotkeyEntry|null);
    public hotkey09?: (IHotkeyEntry|null);
    public hotkey10?: (IHotkeyEntry|null);
    public hotkey11?: (IHotkeyEntry|null);
    public hotkey12?: (IHotkeyEntry|null);
    public hotkey13?: (IHotkeyEntry|null);
    public hotkey14?: (IHotkeyEntry|null);
    public hotkey15?: (IHotkeyEntry|null);
    public hotkey16?: (IHotkeyEntry|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPeripheralOptions {
    blockI2C0?: (PeripheralOptions.II2COptions|null);
    blockI2C1?: (PeripheralOptions.II2COptions|null);
    blockSPI0?: (PeripheralOptions.ISPIOptions|null);
    blockSPI1?: (PeripheralOptions.ISPIOptions|null);
    blockUSB0?: (PeripheralOptions.IUSBOptions|null);
}

export class PeripheralOptions implements IPeripheralOptions {
    constructor(properties?: IPeripheralOptions);
    public blockI2C0?: (PeripheralOptions.II2COptions|null);
    public blockI2C1?: (PeripheralOptions.II2COptions|null);
    public blockSPI0?: (PeripheralOptions.ISPIOptions|null);
    public blockSPI1?: (PeripheralOptions.ISPIOptions|null);
    public blockUSB0?: (PeripheralOptions.IUSBOptions|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PeripheralOptions {

    interface II2COptions {
        enabled?: (boolean|null);
        sda?: (number|null);
        scl?: (number|null);
        speed?: (number|null);
    }

    class I2COptions implements II2COptions {
        constructor(properties?: PeripheralOptions.II2COptions);
        public enabled: boolean;
        public sda: number;
        public scl: number;
        public speed: number;
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISPIOptions {
        enabled?: (boolean|null);
        rx?: (number|null);
        cs?: (number|null);
        sck?: (number|null);
        tx?: (number|null);
    }

    class SPIOptions implements ISPIOptions {
        constructor(properties?: PeripheralOptions.ISPIOptions);
        public enabled: boolean;
        public rx: number;
        public cs: number;
        public sck: number;
        public tx: number;
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUSBOptions {
        enabled?: (boolean|null);
        dp?: (number|null);
        enable5v?: (number|null);
        order?: (number|null);
    }

    class USBOptions implements IUSBOptions {
        constructor(properties?: PeripheralOptions.IUSBOptions);
        public enabled: boolean;
        public dp: number;
        public enable5v: number;
        public order: number;
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IForcedSetupOptions {
    mode?: (ForcedSetupMode|null);
}

export class ForcedSetupOptions implements IForcedSetupOptions {
    constructor(properties?: IForcedSetupOptions);
    public mode: ForcedSetupMode;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IButtonLayoutParamsCommon {
    startX?: (number|null);
    startY?: (number|null);
    buttonRadius?: (number|null);
    buttonPadding?: (number|null);
}

export class ButtonLayoutParamsCommon implements IButtonLayoutParamsCommon {
    constructor(properties?: IButtonLayoutParamsCommon);
    public startX: number;
    public startY: number;
    public buttonRadius: number;
    public buttonPadding: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IButtonLayoutParamsLeft {
    layout?: (ButtonLayout|null);
    common?: (IButtonLayoutParamsCommon|null);
}

export class ButtonLayoutParamsLeft implements IButtonLayoutParamsLeft {
    constructor(properties?: IButtonLayoutParamsLeft);
    public layout: ButtonLayout;
    public common?: (IButtonLayoutParamsCommon|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IButtonLayoutParamsRight {
    layout?: (ButtonLayoutRight|null);
    common?: (IButtonLayoutParamsCommon|null);
}

export class ButtonLayoutParamsRight implements IButtonLayoutParamsRight {
    constructor(properties?: IButtonLayoutParamsRight);
    public layout: ButtonLayoutRight;
    public common?: (IButtonLayoutParamsCommon|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IButtonLayoutCustomOptions {
    paramsLeft?: (IButtonLayoutParamsLeft|null);
    paramsRight?: (IButtonLayoutParamsRight|null);
}

export class ButtonLayoutCustomOptions implements IButtonLayoutCustomOptions {
    constructor(properties?: IButtonLayoutCustomOptions);
    public paramsLeft?: (IButtonLayoutParamsLeft|null);
    public paramsRight?: (IButtonLayoutParamsRight|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPinMappings {
    pinDpadUp?: (number|null);
    pinDpadDown?: (number|null);
    pinDpadLeft?: (number|null);
    pinDpadRight?: (number|null);
    pinButtonB1?: (number|null);
    pinButtonB2?: (number|null);
    pinButtonB3?: (number|null);
    pinButtonB4?: (number|null);
    pinButtonL1?: (number|null);
    pinButtonR1?: (number|null);
    pinButtonL2?: (number|null);
    pinButtonR2?: (number|null);
    pinButtonS1?: (number|null);
    pinButtonS2?: (number|null);
    pinButtonL3?: (number|null);
    pinButtonR3?: (number|null);
    pinButtonA1?: (number|null);
    pinButtonA2?: (number|null);
    pinButtonFn?: (number|null);
}

export class PinMappings implements IPinMappings {
    constructor(properties?: IPinMappings);
    public pinDpadUp: number;
    public pinDpadDown: number;
    public pinDpadLeft: number;
    public pinDpadRight: number;
    public pinButtonB1: number;
    public pinButtonB2: number;
    public pinButtonB3: number;
    public pinButtonB4: number;
    public pinButtonL1: number;
    public pinButtonR1: number;
    public pinButtonL2: number;
    public pinButtonR2: number;
    public pinButtonS1: number;
    public pinButtonS2: number;
    public pinButtonL3: number;
    public pinButtonR3: number;
    public pinButtonA1: number;
    public pinButtonA2: number;
    public pinButtonFn: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IGpioMappingInfo {
    action?: (GpioAction|null);
    direction?: (GpioDirection|null);
    customDpadMask?: (number|null);
    customButtonMask?: (number|null);
}

export class GpioMappingInfo implements IGpioMappingInfo {
    constructor(properties?: IGpioMappingInfo);
    public action: GpioAction;
    public direction: GpioDirection;
    public customDpadMask: number;
    public customButtonMask: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IGpioMappings {
    pins?: (IGpioMappingInfo[]|null);
    profileLabel?: (string|null);
    enabled?: (boolean|null);
}

export class GpioMappings implements IGpioMappings {
    constructor(properties?: IGpioMappings);
    public pins: IGpioMappingInfo[];
    public profileLabel: string;
    public enabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAlternativePinMappings {
    pinButtonB1?: (number|null);
    pinButtonB2?: (number|null);
    pinButtonB3?: (number|null);
    pinButtonB4?: (number|null);
    pinButtonL1?: (number|null);
    pinButtonR1?: (number|null);
    pinButtonL2?: (number|null);
    pinButtonR2?: (number|null);
    pinDpadUp?: (number|null);
    pinDpadDown?: (number|null);
    pinDpadLeft?: (number|null);
    pinDpadRight?: (number|null);
}

export class AlternativePinMappings implements IAlternativePinMappings {
    constructor(properties?: IAlternativePinMappings);
    public pinButtonB1: number;
    public pinButtonB2: number;
    public pinButtonB3: number;
    public pinButtonB4: number;
    public pinButtonL1: number;
    public pinButtonR1: number;
    public pinButtonL2: number;
    public pinButtonR2: number;
    public pinDpadUp: number;
    public pinDpadDown: number;
    public pinDpadLeft: number;
    public pinDpadRight: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IProfileOptions {
    deprecatedAlternativePinMappings?: (IAlternativePinMappings[]|null);
    gpioMappingsSets?: (IGpioMappings[]|null);
}

export class ProfileOptions implements IProfileOptions {
    constructor(properties?: IProfileOptions);
    public deprecatedAlternativePinMappings: IAlternativePinMappings[];
    public gpioMappingsSets: IGpioMappings[];
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDisplayOptions {
    enabled?: (boolean|null);
    deprecatedI2cBlock?: (number|null);
    deprecatedI2cSDAPin?: (number|null);
    deprecatedI2cSCLPin?: (number|null);
    deprecatedI2cAddress?: (number|null);
    deprecatedI2cSpeed?: (number|null);
    buttonLayout?: (ButtonLayout|null);
    buttonLayoutRight?: (ButtonLayoutRight|null);
    buttonLayoutCustomOptions?: (IButtonLayoutCustomOptions|null);
    splashMode?: (SplashMode|null);
    splashChoice?: (SplashChoice|null);
    splashDuration?: (number|null);
    splashImage?: (Uint8Array|null);
    size?: (number|null);
    flip?: (number|null);
    invert?: (boolean|null);
    displaySaverTimeout?: (number|null);
    turnOffWhenSuspended?: (boolean|null);
    displaySaverMode?: (DisplaySaverMode|null);
    buttonLayoutOrientation?: (ButtonLayoutOrientation|null);
    inputMode?: (boolean|null);
    turboMode?: (boolean|null);
    dpadMode?: (boolean|null);
    socdMode?: (boolean|null);
    macroMode?: (boolean|null);
    profileMode?: (boolean|null);
    inputHistoryEnabled?: (boolean|null);
    inputHistoryLength?: (number|null);
    inputHistoryCol?: (number|null);
    inputHistoryRow?: (number|null);
}

export class DisplayOptions implements IDisplayOptions {
    constructor(properties?: IDisplayOptions);
    public enabled: boolean;
    public deprecatedI2cBlock: number;
    public deprecatedI2cSDAPin: number;
    public deprecatedI2cSCLPin: number;
    public deprecatedI2cAddress: number;
    public deprecatedI2cSpeed: number;
    public buttonLayout: ButtonLayout;
    public buttonLayoutRight: ButtonLayoutRight;
    public buttonLayoutCustomOptions?: (IButtonLayoutCustomOptions|null);
    public splashMode: SplashMode;
    public splashChoice: SplashChoice;
    public splashDuration: number;
    public splashImage: Uint8Array;
    public size: number;
    public flip: number;
    public invert: boolean;
    public displaySaverTimeout: number;
    public turnOffWhenSuspended: boolean;
    public displaySaverMode: DisplaySaverMode;
    public buttonLayoutOrientation: ButtonLayoutOrientation;
    public inputMode: boolean;
    public turboMode: boolean;
    public dpadMode: boolean;
    public socdMode: boolean;
    public macroMode: boolean;
    public profileMode: boolean;
    public inputHistoryEnabled: boolean;
    public inputHistoryLength: number;
    public inputHistoryCol: number;
    public inputHistoryRow: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ILEDOptions {
    dataPin?: (number|null);
    ledFormat?: (LEDFormat_Proto|null);
    ledLayout?: (ButtonLayout|null);
    ledsPerButton?: (number|null);
    brightnessMaximum?: (number|null);
    brightnessSteps?: (number|null);
    indexUp?: (number|null);
    indexDown?: (number|null);
    indexLeft?: (number|null);
    indexRight?: (number|null);
    indexB1?: (number|null);
    indexB2?: (number|null);
    indexB3?: (number|null);
    indexB4?: (number|null);
    indexL1?: (number|null);
    indexR1?: (number|null);
    indexL2?: (number|null);
    indexR2?: (number|null);
    indexS1?: (number|null);
    indexS2?: (number|null);
    indexL3?: (number|null);
    indexR3?: (number|null);
    indexA1?: (number|null);
    indexA2?: (number|null);
    pledType?: (PLEDType|null);
    pledPin1?: (number|null);
    pledPin2?: (number|null);
    pledPin3?: (number|null);
    pledPin4?: (number|null);
    pledColor?: (number|null);
    turnOffWhenSuspended?: (boolean|null);
    pledIndex1?: (number|null);
    pledIndex2?: (number|null);
    pledIndex3?: (number|null);
    pledIndex4?: (number|null);
    caseRGBType?: (CaseRGBType|null);
    caseRGBIndex?: (number|null);
    caseRGBColor?: (number|null);
    caseRGBCount?: (number|null);
}

export class LEDOptions implements ILEDOptions {
    constructor(properties?: ILEDOptions);
    public dataPin: number;
    public ledFormat: LEDFormat_Proto;
    public ledLayout: ButtonLayout;
    public ledsPerButton: number;
    public brightnessMaximum: number;
    public brightnessSteps: number;
    public indexUp: number;
    public indexDown: number;
    public indexLeft: number;
    public indexRight: number;
    public indexB1: number;
    public indexB2: number;
    public indexB3: number;
    public indexB4: number;
    public indexL1: number;
    public indexR1: number;
    public indexL2: number;
    public indexR2: number;
    public indexS1: number;
    public indexS2: number;
    public indexL3: number;
    public indexR3: number;
    public indexA1: number;
    public indexA2: number;
    public pledType: PLEDType;
    public pledPin1: number;
    public pledPin2: number;
    public pledPin3: number;
    public pledPin4: number;
    public pledColor: number;
    public turnOffWhenSuspended: boolean;
    public pledIndex1: number;
    public pledIndex2: number;
    public pledIndex3: number;
    public pledIndex4: number;
    public caseRGBType: CaseRGBType;
    public caseRGBIndex: number;
    public caseRGBColor: number;
    public caseRGBCount: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAnimationOptions {
    baseAnimationIndex?: (number|null);
    brightness?: (number|null);
    staticColorIndex?: (number|null);
    buttonColorIndex?: (number|null);
    chaseCycleTime?: (number|null);
    rainbowCycleTime?: (number|null);
    themeIndex?: (number|null);
    hasCustomTheme?: (boolean|null);
    customThemeUp?: (number|null);
    customThemeDown?: (number|null);
    customThemeLeft?: (number|null);
    customThemeRight?: (number|null);
    customThemeB1?: (number|null);
    customThemeB2?: (number|null);
    customThemeB3?: (number|null);
    customThemeB4?: (number|null);
    customThemeL1?: (number|null);
    customThemeR1?: (number|null);
    customThemeL2?: (number|null);
    customThemeR2?: (number|null);
    customThemeS1?: (number|null);
    customThemeS2?: (number|null);
    customThemeL3?: (number|null);
    customThemeR3?: (number|null);
    customThemeA1?: (number|null);
    customThemeA2?: (number|null);
    customThemeUpPressed?: (number|null);
    customThemeDownPressed?: (number|null);
    customThemeLeftPressed?: (number|null);
    customThemeRightPressed?: (number|null);
    customThemeB1Pressed?: (number|null);
    customThemeB2Pressed?: (number|null);
    customThemeB3Pressed?: (number|null);
    customThemeB4Pressed?: (number|null);
    customThemeL1Pressed?: (number|null);
    customThemeR1Pressed?: (number|null);
    customThemeL2Pressed?: (number|null);
    customThemeR2Pressed?: (number|null);
    customThemeS1Pressed?: (number|null);
    customThemeS2Pressed?: (number|null);
    customThemeL3Pressed?: (number|null);
    customThemeR3Pressed?: (number|null);
    customThemeA1Pressed?: (number|null);
    customThemeA2Pressed?: (number|null);
    buttonPressColorCooldownTimeInMs?: (number|null);
    ambientLightEffectsCountIndex?: (number|null);
    ambientLightCustomLinkageModeFlag?: (boolean|null);
    ambientLightGradientSpeed?: (number|null);
    ambientLightChaseSpeed?: (number|null);
    ambientLightBreathSpeed?: (number|null);
    alGradientBrightnessCustomX?: (number|null);
    alChaseBrightnessCustomX?: (number|null);
    alStaticColorBrightnessCustomX?: (number|null);
    alStaticBrightnessCustomThemeX?: (number|null);
    alCustomStaticThemeIndex?: (number|null);
    alCustomStaticColorIndex?: (number|null);
}

export class AnimationOptions implements IAnimationOptions {
    constructor(properties?: IAnimationOptions);
    public baseAnimationIndex: number;
    public brightness: number;
    public staticColorIndex: number;
    public buttonColorIndex: number;
    public chaseCycleTime: number;
    public rainbowCycleTime: number;
    public themeIndex: number;
    public hasCustomTheme: boolean;
    public customThemeUp: number;
    public customThemeDown: number;
    public customThemeLeft: number;
    public customThemeRight: number;
    public customThemeB1: number;
    public customThemeB2: number;
    public customThemeB3: number;
    public customThemeB4: number;
    public customThemeL1: number;
    public customThemeR1: number;
    public customThemeL2: number;
    public customThemeR2: number;
    public customThemeS1: number;
    public customThemeS2: number;
    public customThemeL3: number;
    public customThemeR3: number;
    public customThemeA1: number;
    public customThemeA2: number;
    public customThemeUpPressed: number;
    public customThemeDownPressed: number;
    public customThemeLeftPressed: number;
    public customThemeRightPressed: number;
    public customThemeB1Pressed: number;
    public customThemeB2Pressed: number;
    public customThemeB3Pressed: number;
    public customThemeB4Pressed: number;
    public customThemeL1Pressed: number;
    public customThemeR1Pressed: number;
    public customThemeL2Pressed: number;
    public customThemeR2Pressed: number;
    public customThemeS1Pressed: number;
    public customThemeS2Pressed: number;
    public customThemeL3Pressed: number;
    public customThemeR3Pressed: number;
    public customThemeA1Pressed: number;
    public customThemeA2Pressed: number;
    public buttonPressColorCooldownTimeInMs: number;
    public ambientLightEffectsCountIndex: number;
    public ambientLightCustomLinkageModeFlag: boolean;
    public ambientLightGradientSpeed: number;
    public ambientLightChaseSpeed: number;
    public ambientLightBreathSpeed: number;
    public alGradientBrightnessCustomX: number;
    public alChaseBrightnessCustomX: number;
    public alStaticColorBrightnessCustomX: number;
    public alStaticBrightnessCustomThemeX: number;
    public alCustomStaticThemeIndex: number;
    public alCustomStaticColorIndex: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IBootselButtonOptions {
    enabled?: (boolean|null);
    buttonMap?: (number|null);
}

export class BootselButtonOptions implements IBootselButtonOptions {
    constructor(properties?: IBootselButtonOptions);
    public enabled: boolean;
    public buttonMap: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IOnBoardLedOptions {
    mode?: (OnBoardLedMode|null);
    enabled?: (boolean|null);
}

export class OnBoardLedOptions implements IOnBoardLedOptions {
    constructor(properties?: IOnBoardLedOptions);
    public mode: OnBoardLedMode;
    public enabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAnalogOptions {
    enabled?: (boolean|null);
    analogAdc1PinX?: (number|null);
    analogAdc1PinY?: (number|null);
    forcedCircularity?: (boolean|null);
    innerDeadzone?: (number|null);
    analogAdc2PinX?: (number|null);
    analogAdc2PinY?: (number|null);
    analogAdc1Mode?: (DpadMode|null);
    analogAdc2Mode?: (DpadMode|null);
    analogAdc1Invert?: (InvertMode|null);
    analogAdc2Invert?: (InvertMode|null);
    autoCalibrate?: (boolean|null);
    outerDeadzone?: (number|null);
    analogSmoothing?: (boolean|null);
    smoothingFactor?: (number|null);
    analogError?: (number|null);
    analogSmoothing2?: (boolean|null);
    smoothingFactor2?: (number|null);
    analogError2?: (number|null);
    innerDeadzone2?: (number|null);
    outerDeadzone2?: (number|null);
    autoCalibrate2?: (boolean|null);
    forcedCircularity2?: (boolean|null);
}

export class AnalogOptions implements IAnalogOptions {
    constructor(properties?: IAnalogOptions);
    public enabled: boolean;
    public analogAdc1PinX: number;
    public analogAdc1PinY: number;
    public forcedCircularity: boolean;
    public innerDeadzone: number;
    public analogAdc2PinX: number;
    public analogAdc2PinY: number;
    public analogAdc1Mode: DpadMode;
    public analogAdc2Mode: DpadMode;
    public analogAdc1Invert: InvertMode;
    public analogAdc2Invert: InvertMode;
    public autoCalibrate: boolean;
    public outerDeadzone: number;
    public analogSmoothing: boolean;
    public smoothingFactor: number;
    public analogError: number;
    public analogSmoothing2: boolean;
    public smoothingFactor2: number;
    public analogError2: number;
    public innerDeadzone2: number;
    public outerDeadzone2: number;
    public autoCalibrate2: boolean;
    public forcedCircularity2: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ITurboOptions {
    enabled?: (boolean|null);
    deprecatedButtonPin?: (number|null);
    ledPin?: (number|null);
    shotCount?: (number|null);
    shmupDialPin?: (number|null);
    shmupModeEnabled?: (boolean|null);
    shmupAlwaysOn1?: (number|null);
    shmupAlwaysOn2?: (number|null);
    shmupAlwaysOn3?: (number|null);
    shmupAlwaysOn4?: (number|null);
    shmupBtn1Pin?: (number|null);
    shmupBtn2Pin?: (number|null);
    shmupBtn3Pin?: (number|null);
    shmupBtn4Pin?: (number|null);
    shmupBtnMask1?: (number|null);
    shmupBtnMask2?: (number|null);
    shmupBtnMask3?: (number|null);
    shmupBtnMask4?: (number|null);
    shmupMixMode?: (ShmupMixMode|null);
    turboLedType?: (PLEDType|null);
    turboLedIndex?: (number|null);
    turboLedColor?: (number|null);
}

export class TurboOptions implements ITurboOptions {
    constructor(properties?: ITurboOptions);
    public enabled: boolean;
    public deprecatedButtonPin: number;
    public ledPin: number;
    public shotCount: number;
    public shmupDialPin: number;
    public shmupModeEnabled: boolean;
    public shmupAlwaysOn1: number;
    public shmupAlwaysOn2: number;
    public shmupAlwaysOn3: number;
    public shmupAlwaysOn4: number;
    public shmupBtn1Pin: number;
    public shmupBtn2Pin: number;
    public shmupBtn3Pin: number;
    public shmupBtn4Pin: number;
    public shmupBtnMask1: number;
    public shmupBtnMask2: number;
    public shmupBtnMask3: number;
    public shmupBtnMask4: number;
    public shmupMixMode: ShmupMixMode;
    public turboLedType: PLEDType;
    public turboLedIndex: number;
    public turboLedColor: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ISliderOptions {
    enabled?: (boolean|null);
    deprecatedPinSliderOne?: (number|null);
    deprecatedPinSliderTwo?: (number|null);
    deprecatedModeOne?: (DpadMode|null);
    deprecatedModeTwo?: (DpadMode|null);
    deprecatedModeDefault?: (DpadMode|null);
}

export class SliderOptions implements ISliderOptions {
    constructor(properties?: ISliderOptions);
    public enabled: boolean;
    public deprecatedPinSliderOne: number;
    public deprecatedPinSliderTwo: number;
    public deprecatedModeOne: DpadMode;
    public deprecatedModeTwo: DpadMode;
    public deprecatedModeDefault: DpadMode;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ISOCDSliderOptions {
    enabled?: (boolean|null);
    deprecatedPinOne?: (number|null);
    deprecatedPinTwo?: (number|null);
    modeDefault?: (SOCDMode|null);
    deprecatedModeOne?: (SOCDMode|null);
    deprecatedModeTwo?: (SOCDMode|null);
}

export class SOCDSliderOptions implements ISOCDSliderOptions {
    constructor(properties?: ISOCDSliderOptions);
    public enabled: boolean;
    public deprecatedPinOne: number;
    public deprecatedPinTwo: number;
    public modeDefault: SOCDMode;
    public deprecatedModeOne: SOCDMode;
    public deprecatedModeTwo: SOCDMode;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IReverseOptions {
    enabled?: (boolean|null);
    buttonPin?: (number|null);
    ledPin?: (number|null);
    actionUp?: (number|null);
    actionDown?: (number|null);
    actionLeft?: (number|null);
    actionRight?: (number|null);
}

export class ReverseOptions implements IReverseOptions {
    constructor(properties?: IReverseOptions);
    public enabled: boolean;
    public buttonPin: number;
    public ledPin: number;
    public actionUp: number;
    public actionDown: number;
    public actionLeft: number;
    public actionRight: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAnalogADS1219Options {
    enabled?: (boolean|null);
    deprecatedI2cBlock?: (number|null);
    deprecatedI2cSDAPin?: (number|null);
    deprecatedI2cSCLPin?: (number|null);
    deprecatedI2cAddress?: (number|null);
    deprecatedI2cSpeed?: (number|null);
}

export class AnalogADS1219Options implements IAnalogADS1219Options {
    constructor(properties?: IAnalogADS1219Options);
    public enabled: boolean;
    public deprecatedI2cBlock: number;
    public deprecatedI2cSDAPin: number;
    public deprecatedI2cSCLPin: number;
    public deprecatedI2cAddress: number;
    public deprecatedI2cSpeed: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAnalogADS1256Options {
    enabled?: (boolean|null);
    spiBlock?: (number|null);
    csPin?: (number|null);
    drdyPin?: (number|null);
    avdd?: (number|null);
    enableTriggers?: (boolean|null);
}

export class AnalogADS1256Options implements IAnalogADS1256Options {
    constructor(properties?: IAnalogADS1256Options);
    public enabled: boolean;
    public spiBlock: number;
    public csPin: number;
    public drdyPin: number;
    public avdd: number;
    public enableTriggers: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDualDirectionalOptions {
    enabled?: (boolean|null);
    deprecatedUpPin?: (number|null);
    deprecatedDownPin?: (number|null);
    deprecatedLeftPin?: (number|null);
    deprecatedRightPin?: (number|null);
    dpadMode?: (DpadMode|null);
    combineMode?: (DualDirectionalCombinationMode|null);
    fourWayMode?: (boolean|null);
}

export class DualDirectionalOptions implements IDualDirectionalOptions {
    constructor(properties?: IDualDirectionalOptions);
    public enabled: boolean;
    public deprecatedUpPin: number;
    public deprecatedDownPin: number;
    public deprecatedLeftPin: number;
    public deprecatedRightPin: number;
    public dpadMode: DpadMode;
    public combineMode: DualDirectionalCombinationMode;
    public fourWayMode: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface ITiltOptions {
    enabled?: (boolean|null);
    tilt1Pin?: (number|null);
    tilt2Pin?: (number|null);
    tiltFunctionPin?: (number|null);
    tiltLeftAnalogUpPin?: (number|null);
    tiltLeftAnalogDownPin?: (number|null);
    tiltLeftAnalogLeftPin?: (number|null);
    tiltLeftAnalogRightPin?: (number|null);
    tiltRightAnalogUpPin?: (number|null);
    tiltRightAnalogDownPin?: (number|null);
    tiltRightAnalogLeftPin?: (number|null);
    tiltRightAnalogRightPin?: (number|null);
    tiltSOCDMode?: (SOCDMode|null);
    factorTilt1LeftX?: (number|null);
    factorTilt1LeftY?: (number|null);
    factorTilt1RightX?: (number|null);
    factorTilt1RightY?: (number|null);
    factorTilt2LeftX?: (number|null);
    factorTilt2LeftY?: (number|null);
    factorTilt2RightX?: (number|null);
    factorTilt2RightY?: (number|null);
}

export class TiltOptions implements ITiltOptions {
    constructor(properties?: ITiltOptions);
    public enabled: boolean;
    public tilt1Pin: number;
    public tilt2Pin: number;
    public tiltFunctionPin: number;
    public tiltLeftAnalogUpPin: number;
    public tiltLeftAnalogDownPin: number;
    public tiltLeftAnalogLeftPin: number;
    public tiltLeftAnalogRightPin: number;
    public tiltRightAnalogUpPin: number;
    public tiltRightAnalogDownPin: number;
    public tiltRightAnalogLeftPin: number;
    public tiltRightAnalogRightPin: number;
    public tiltSOCDMode: SOCDMode;
    public factorTilt1LeftX: number;
    public factorTilt1LeftY: number;
    public factorTilt1RightX: number;
    public factorTilt1RightY: number;
    public factorTilt2LeftX: number;
    public factorTilt2LeftY: number;
    public factorTilt2RightX: number;
    public factorTilt2RightY: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IBuzzerOptions {
    enabled?: (boolean|null);
    pin?: (number|null);
    volume?: (number|null);
    enablePin?: (number|null);
}

export class BuzzerOptions implements IBuzzerOptions {
    constructor(properties?: IBuzzerOptions);
    public enabled: boolean;
    public pin: number;
    public volume: number;
    public enablePin: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IExtraButtonOptions {
    enabled?: (boolean|null);
    pin?: (number|null);
    buttonMap?: (number|null);
}

export class ExtraButtonOptions implements IExtraButtonOptions {
    constructor(properties?: IExtraButtonOptions);
    public enabled: boolean;
    public pin: number;
    public buttonMap: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPlayerNumberOptions {
    enabled?: (boolean|null);
    number?: (number|null);
}

export class PlayerNumberOptions implements IPlayerNumberOptions {
    constructor(properties?: IPlayerNumberOptions);
    public enabled: boolean;
    public number: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPS4Options {
    enabled?: (boolean|null);
    serial?: (Uint8Array|null);
    signature?: (Uint8Array|null);
    rsaN?: (Uint8Array|null);
    rsaE?: (Uint8Array|null);
    rsaD?: (Uint8Array|null);
    rsaP?: (Uint8Array|null);
    rsaQ?: (Uint8Array|null);
    rsaDP?: (Uint8Array|null);
    rsaDQ?: (Uint8Array|null);
    rsaQP?: (Uint8Array|null);
    rsaRN?: (Uint8Array|null);
}

export class PS4Options implements IPS4Options {
    constructor(properties?: IPS4Options);
    public enabled: boolean;
    public serial: Uint8Array;
    public signature: Uint8Array;
    public rsaN: Uint8Array;
    public rsaE: Uint8Array;
    public rsaD: Uint8Array;
    public rsaP: Uint8Array;
    public rsaQ: Uint8Array;
    public rsaDP: Uint8Array;
    public rsaDQ: Uint8Array;
    public rsaQP: Uint8Array;
    public rsaRN: Uint8Array;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPSPassthroughOptions {
    enabled?: (boolean|null);
    deprecatedPinDplus?: (number|null);
    deprecatedPin5V?: (number|null);
}

export class PSPassthroughOptions implements IPSPassthroughOptions {
    constructor(properties?: IPSPassthroughOptions);
    public enabled: boolean;
    public deprecatedPinDplus: number;
    public deprecatedPin5V: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IXBOnePassthroughOptions {
    enabled?: (boolean|null);
}

export class XBOnePassthroughOptions implements IXBOnePassthroughOptions {
    constructor(properties?: IXBOnePassthroughOptions);
    public enabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IWiiOptions {
    enabled?: (boolean|null);
    deprecatedI2cBlock?: (number|null);
    deprecatedI2cSDAPin?: (number|null);
    deprecatedI2cSCLPin?: (number|null);
    deprecatedI2cSpeed?: (number|null);
    controllers?: (WiiOptions.IControllerOptions|null);
}

export class WiiOptions implements IWiiOptions {
    constructor(properties?: IWiiOptions);
    public enabled: boolean;
    public deprecatedI2cBlock: number;
    public deprecatedI2cSDAPin: number;
    public deprecatedI2cSCLPin: number;
    public deprecatedI2cSpeed: number;
    public controllers?: (WiiOptions.IControllerOptions|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace WiiOptions {

    interface IAnalogAxis {
        axisType?: (number|null);
        minRange?: (number|null);
        maxRange?: (number|null);
    }

    class AnalogAxis implements IAnalogAxis {
        constructor(properties?: WiiOptions.IAnalogAxis);
        public axisType: number;
        public minRange: number;
        public maxRange: number;
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStickOptions {
        x?: (WiiOptions.IAnalogAxis|null);
        y?: (WiiOptions.IAnalogAxis|null);
    }

    class StickOptions implements IStickOptions {
        constructor(properties?: WiiOptions.IStickOptions);
        public x?: (WiiOptions.IAnalogAxis|null);
        public y?: (WiiOptions.IAnalogAxis|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INunchukOptions {
        buttonC?: (number|null);
        buttonZ?: (number|null);
        stick?: (WiiOptions.IStickOptions|null);
    }

    class NunchukOptions implements INunchukOptions {
        constructor(properties?: WiiOptions.INunchukOptions);
        public buttonC: number;
        public buttonZ: number;
        public stick?: (WiiOptions.IStickOptions|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IClassicOptions {
        buttonA?: (number|null);
        buttonB?: (number|null);
        buttonX?: (number|null);
        buttonY?: (number|null);
        buttonL?: (number|null);
        buttonZL?: (number|null);
        buttonR?: (number|null);
        buttonZR?: (number|null);
        buttonMinus?: (number|null);
        buttonPlus?: (number|null);
        buttonHome?: (number|null);
        buttonUp?: (number|null);
        buttonDown?: (number|null);
        buttonLeft?: (number|null);
        buttonRight?: (number|null);
        rightStick?: (WiiOptions.IStickOptions|null);
        leftStick?: (WiiOptions.IStickOptions|null);
        leftTrigger?: (WiiOptions.IAnalogAxis|null);
        rightTrigger?: (WiiOptions.IAnalogAxis|null);
    }

    class ClassicOptions implements IClassicOptions {
        constructor(properties?: WiiOptions.IClassicOptions);
        public buttonA: number;
        public buttonB: number;
        public buttonX: number;
        public buttonY: number;
        public buttonL: number;
        public buttonZL: number;
        public buttonR: number;
        public buttonZR: number;
        public buttonMinus: number;
        public buttonPlus: number;
        public buttonHome: number;
        public buttonUp: number;
        public buttonDown: number;
        public buttonLeft: number;
        public buttonRight: number;
        public rightStick?: (WiiOptions.IStickOptions|null);
        public leftStick?: (WiiOptions.IStickOptions|null);
        public leftTrigger?: (WiiOptions.IAnalogAxis|null);
        public rightTrigger?: (WiiOptions.IAnalogAxis|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITaikoOptions {
        buttonKatLeft?: (number|null);
        buttonKatRight?: (number|null);
        buttonDonLeft?: (number|null);
        buttonDonRight?: (number|null);
    }

    class TaikoOptions implements ITaikoOptions {
        constructor(properties?: WiiOptions.ITaikoOptions);
        public buttonKatLeft: number;
        public buttonKatRight: number;
        public buttonDonLeft: number;
        public buttonDonRight: number;
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGuitarOptions {
        buttonRed?: (number|null);
        buttonGreen?: (number|null);
        buttonYellow?: (number|null);
        buttonBlue?: (number|null);
        buttonOrange?: (number|null);
        buttonPedal?: (number|null);
        buttonMinus?: (number|null);
        buttonPlus?: (number|null);
        strumUp?: (number|null);
        strumDown?: (number|null);
        stick?: (WiiOptions.IStickOptions|null);
        whammyBar?: (WiiOptions.IAnalogAxis|null);
    }

    class GuitarOptions implements IGuitarOptions {
        constructor(properties?: WiiOptions.IGuitarOptions);
        public buttonRed: number;
        public buttonGreen: number;
        public buttonYellow: number;
        public buttonBlue: number;
        public buttonOrange: number;
        public buttonPedal: number;
        public buttonMinus: number;
        public buttonPlus: number;
        public strumUp: number;
        public strumDown: number;
        public stick?: (WiiOptions.IStickOptions|null);
        public whammyBar?: (WiiOptions.IAnalogAxis|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDrumOptions {
        buttonRed?: (number|null);
        buttonGreen?: (number|null);
        buttonYellow?: (number|null);
        buttonBlue?: (number|null);
        buttonOrange?: (number|null);
        buttonPedal?: (number|null);
        buttonMinus?: (number|null);
        buttonPlus?: (number|null);
        stick?: (WiiOptions.IStickOptions|null);
    }

    class DrumOptions implements IDrumOptions {
        constructor(properties?: WiiOptions.IDrumOptions);
        public buttonRed: number;
        public buttonGreen: number;
        public buttonYellow: number;
        public buttonBlue: number;
        public buttonOrange: number;
        public buttonPedal: number;
        public buttonMinus: number;
        public buttonPlus: number;
        public stick?: (WiiOptions.IStickOptions|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITurntableOptions {
        buttonLeftRed?: (number|null);
        buttonLeftGreen?: (number|null);
        buttonLeftBlue?: (number|null);
        buttonRightRed?: (number|null);
        buttonRightGreen?: (number|null);
        buttonRightBlue?: (number|null);
        buttonMinus?: (number|null);
        buttonPlus?: (number|null);
        buttonEuphoria?: (number|null);
        stick?: (WiiOptions.IStickOptions|null);
        leftTurntable?: (WiiOptions.IAnalogAxis|null);
        rightTurntable?: (WiiOptions.IAnalogAxis|null);
        effects?: (WiiOptions.IAnalogAxis|null);
        fader?: (WiiOptions.IAnalogAxis|null);
    }

    class TurntableOptions implements ITurntableOptions {
        constructor(properties?: WiiOptions.ITurntableOptions);
        public buttonLeftRed: number;
        public buttonLeftGreen: number;
        public buttonLeftBlue: number;
        public buttonRightRed: number;
        public buttonRightGreen: number;
        public buttonRightBlue: number;
        public buttonMinus: number;
        public buttonPlus: number;
        public buttonEuphoria: number;
        public stick?: (WiiOptions.IStickOptions|null);
        public leftTurntable?: (WiiOptions.IAnalogAxis|null);
        public rightTurntable?: (WiiOptions.IAnalogAxis|null);
        public effects?: (WiiOptions.IAnalogAxis|null);
        public fader?: (WiiOptions.IAnalogAxis|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IControllerOptions {
        nunchuk?: (WiiOptions.INunchukOptions|null);
        classic?: (WiiOptions.IClassicOptions|null);
        taiko?: (WiiOptions.ITaikoOptions|null);
        guitar?: (WiiOptions.IGuitarOptions|null);
        drum?: (WiiOptions.IDrumOptions|null);
        turntable?: (WiiOptions.ITurntableOptions|null);
    }

    class ControllerOptions implements IControllerOptions {
        constructor(properties?: WiiOptions.IControllerOptions);
        public nunchuk?: (WiiOptions.INunchukOptions|null);
        public classic?: (WiiOptions.IClassicOptions|null);
        public taiko?: (WiiOptions.ITaikoOptions|null);
        public guitar?: (WiiOptions.IGuitarOptions|null);
        public drum?: (WiiOptions.IDrumOptions|null);
        public turntable?: (WiiOptions.ITurntableOptions|null);
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface ISNESOptions {
    enabled?: (boolean|null);
    clockPin?: (number|null);
    latchPin?: (number|null);
    dataPin?: (number|null);
}

export class SNESOptions implements ISNESOptions {
    constructor(properties?: ISNESOptions);
    public enabled: boolean;
    public clockPin: number;
    public latchPin: number;
    public dataPin: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IKeyboardHostOptions {
    enabled?: (boolean|null);
    deprecatedPinDplus?: (number|null);
    mapping?: (IKeyboardMapping|null);
    deprecatedPin5V?: (number|null);
    mouseLeft?: (number|null);
    mouseMiddle?: (number|null);
    mouseRight?: (number|null);
}

export class KeyboardHostOptions implements IKeyboardHostOptions {
    constructor(properties?: IKeyboardHostOptions);
    public enabled: boolean;
    public deprecatedPinDplus: number;
    public mapping?: (IKeyboardMapping|null);
    public deprecatedPin5V: number;
    public mouseLeft: number;
    public mouseMiddle: number;
    public mouseRight: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IGamepadUSBHostOptions {
    enabled?: (boolean|null);
}

export class GamepadUSBHostOptions implements IGamepadUSBHostOptions {
    constructor(properties?: IGamepadUSBHostOptions);
    public enabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IFocusModeOptions {
    enabled?: (boolean|null);
    pin?: (number|null);
    buttonLockMask?: (number|null);
    oledLockEnabled?: (boolean|null);
    rgbLockEnabled?: (boolean|null);
    buttonLockEnabled?: (boolean|null);
    macroLockEnabled?: (boolean|null);
}

export class FocusModeOptions implements IFocusModeOptions {
    constructor(properties?: IFocusModeOptions);
    public enabled: boolean;
    public pin: number;
    public buttonLockMask: number;
    public oledLockEnabled: boolean;
    public rgbLockEnabled: boolean;
    public buttonLockEnabled: boolean;
    public macroLockEnabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IMacroInput {
    buttonMask?: (number|null);
    duration?: (number|null);
    waitDuration?: (number|null);
}

export class MacroInput implements IMacroInput {
    constructor(properties?: IMacroInput);
    public buttonMask: number;
    public duration: number;
    public waitDuration: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IMacro {
    macroType?: (MacroType|null);
    macroLabel?: (string|null);
    macroInputs?: (IMacroInput[]|null);
    enabled?: (boolean|null);
    useMacroTriggerButton?: (boolean|null);
    deprecatedMacroTriggerPin?: (number|null);
    macroTriggerButton?: (number|null);
    exclusive?: (boolean|null);
    interruptible?: (boolean|null);
    showFrames?: (boolean|null);
}

export class Macro implements IMacro {
    constructor(properties?: IMacro);
    public macroType: MacroType;
    public macroLabel: string;
    public macroInputs: IMacroInput[];
    public enabled: boolean;
    public useMacroTriggerButton: boolean;
    public deprecatedMacroTriggerPin: number;
    public macroTriggerButton: number;
    public exclusive: boolean;
    public interruptible: boolean;
    public showFrames: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IMacroOptions {
    enabled?: (boolean|null);
    deprecatedPin?: (number|null);
    macroList?: (IMacro[]|null);
    macroBoardLedEnabled?: (boolean|null);
}

export class MacroOptions implements IMacroOptions {
    constructor(properties?: IMacroOptions);
    public enabled: boolean;
    public deprecatedPin: number;
    public macroList: IMacro[];
    public macroBoardLedEnabled: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IInputHistoryOptions {
    deprecatedEnabled?: (boolean|null);
    deprecatedLength?: (number|null);
    deprecatedCol?: (number|null);
    deprecatedRow?: (number|null);
}

export class InputHistoryOptions implements IInputHistoryOptions {
    constructor(properties?: IInputHistoryOptions);
    public deprecatedEnabled: boolean;
    public deprecatedLength: number;
    public deprecatedCol: number;
    public deprecatedRow: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IRotaryPinOptions {
    enabled?: (boolean|null);
    pinA?: (number|null);
    pinB?: (number|null);
    mode?: (RotaryEncoderPinMode|null);
    pulsesPerRevolution?: (number|null);
    resetAfter?: (number|null);
    allowWrapAround?: (boolean|null);
    multiplier?: (number|null);
}

export class RotaryPinOptions implements IRotaryPinOptions {
    constructor(properties?: IRotaryPinOptions);
    public enabled: boolean;
    public pinA: number;
    public pinB: number;
    public mode: RotaryEncoderPinMode;
    public pulsesPerRevolution: number;
    public resetAfter: number;
    public allowWrapAround: boolean;
    public multiplier: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IRotaryOptions {
    enabled?: (boolean|null);
    encoderOne?: (IRotaryPinOptions|null);
    encoderTwo?: (IRotaryPinOptions|null);
}

export class RotaryOptions implements IRotaryOptions {
    constructor(properties?: IRotaryOptions);
    public enabled: boolean;
    public encoderOne?: (IRotaryPinOptions|null);
    public encoderTwo?: (IRotaryPinOptions|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IPCF8575Options {
    enabled?: (boolean|null);
    deprecatedI2cBlock?: (number|null);
    pins?: (IGpioMappingInfo[]|null);
}

export class PCF8575Options implements IPCF8575Options {
    constructor(properties?: IPCF8575Options);
    public enabled: boolean;
    public deprecatedI2cBlock: number;
    public pins: IGpioMappingInfo[];
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDRV8833RumbleOptions {
    enabled?: (boolean|null);
    leftMotorPin?: (number|null);
    rightMotorPin?: (number|null);
    motorSleepPin?: (number|null);
    pwmFrequency?: (number|null);
    dutyMin?: (number|null);
    dutyMax?: (number|null);
}

export class DRV8833RumbleOptions implements IDRV8833RumbleOptions {
    constructor(properties?: IDRV8833RumbleOptions);
    public enabled: boolean;
    public leftMotorPin: number;
    public rightMotorPin: number;
    public motorSleepPin: number;
    public pwmFrequency: number;
    public dutyMin: number;
    public dutyMax: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IReactiveLEDInfo {
    pin?: (number|null);
    action?: (GpioAction|null);
    modeDown?: (ReactiveLEDMode|null);
    modeUp?: (ReactiveLEDMode|null);
}

export class ReactiveLEDInfo implements IReactiveLEDInfo {
    constructor(properties?: IReactiveLEDInfo);
    public pin: number;
    public action: GpioAction;
    public modeDown: ReactiveLEDMode;
    public modeUp: ReactiveLEDMode;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IReactiveLEDOptions {
    enabled?: (boolean|null);
    leds?: (IReactiveLEDInfo[]|null);
}

export class ReactiveLEDOptions implements IReactiveLEDOptions {
    constructor(properties?: IReactiveLEDOptions);
    public enabled: boolean;
    public leds: IReactiveLEDInfo[];
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IDS4UARTBridgeOptions {
    enabled?: (boolean|null);
    txPin?: (number|null);
    rxPin?: (number|null);
}

export class DS4UARTBridgeOptions implements IDS4UARTBridgeOptions {
    constructor(properties?: IDS4UARTBridgeOptions);
    public enabled: boolean;
    public txPin: number;
    public rxPin: number;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IAddonOptions {
    bootselButtonOptions?: (IBootselButtonOptions|null);
    onBoardLedOptions?: (IOnBoardLedOptions|null);
    analogOptions?: (IAnalogOptions|null);
    turboOptions?: (ITurboOptions|null);
    deprecatedSliderOptions?: (ISliderOptions|null);
    reverseOptions?: (IReverseOptions|null);
    analogADS1219Options?: (IAnalogADS1219Options|null);
    dualDirectionalOptions?: (IDualDirectionalOptions|null);
    buzzerOptions?: (IBuzzerOptions|null);
    deprecatedExtraButtonOptions?: (IExtraButtonOptions|null);
    playerNumberOptions?: (IPlayerNumberOptions|null);
    ps4Options?: (IPS4Options|null);
    wiiOptions?: (IWiiOptions|null);
    socdSliderOptions?: (ISOCDSliderOptions|null);
    snesOptions?: (ISNESOptions|null);
    focusModeOptions?: (IFocusModeOptions|null);
    keyboardHostOptions?: (IKeyboardHostOptions|null);
    tiltOptions?: (ITiltOptions|null);
    psPassthroughOptions?: (IPSPassthroughOptions|null);
    macroOptions?: (IMacroOptions|null);
    inputHistoryOptions?: (IInputHistoryOptions|null);
    xbonePassthroughOptions?: (IXBOnePassthroughOptions|null);
    analogADS1256Options?: (IAnalogADS1256Options|null);
    rotaryOptions?: (IRotaryOptions|null);
    pcf8575Options?: (IPCF8575Options|null);
    drv8833RumbleOptions?: (IDRV8833RumbleOptions|null);
    reactiveLEDOptions?: (IReactiveLEDOptions|null);
    gamepadUSBHostOptions?: (IGamepadUSBHostOptions|null);
    ds4UartBridgeOptions?: (IDS4UARTBridgeOptions|null);
}

export class AddonOptions implements IAddonOptions {
    constructor(properties?: IAddonOptions);
    public bootselButtonOptions?: (IBootselButtonOptions|null);
    public onBoardLedOptions?: (IOnBoardLedOptions|null);
    public analogOptions?: (IAnalogOptions|null);
    public turboOptions?: (ITurboOptions|null);
    public deprecatedSliderOptions?: (ISliderOptions|null);
    public reverseOptions?: (IReverseOptions|null);
    public analogADS1219Options?: (IAnalogADS1219Options|null);
    public dualDirectionalOptions?: (IDualDirectionalOptions|null);
    public buzzerOptions?: (IBuzzerOptions|null);
    public deprecatedExtraButtonOptions?: (IExtraButtonOptions|null);
    public playerNumberOptions?: (IPlayerNumberOptions|null);
    public ps4Options?: (IPS4Options|null);
    public wiiOptions?: (IWiiOptions|null);
    public socdSliderOptions?: (ISOCDSliderOptions|null);
    public snesOptions?: (ISNESOptions|null);
    public focusModeOptions?: (IFocusModeOptions|null);
    public keyboardHostOptions?: (IKeyboardHostOptions|null);
    public tiltOptions?: (ITiltOptions|null);
    public psPassthroughOptions?: (IPSPassthroughOptions|null);
    public macroOptions?: (IMacroOptions|null);
    public inputHistoryOptions?: (IInputHistoryOptions|null);
    public xbonePassthroughOptions?: (IXBOnePassthroughOptions|null);
    public analogADS1256Options?: (IAnalogADS1256Options|null);
    public rotaryOptions?: (IRotaryOptions|null);
    public pcf8575Options?: (IPCF8575Options|null);
    public drv8833RumbleOptions?: (IDRV8833RumbleOptions|null);
    public reactiveLEDOptions?: (IReactiveLEDOptions|null);
    public gamepadUSBHostOptions?: (IGamepadUSBHostOptions|null);
    public ds4UartBridgeOptions?: (IDS4UARTBridgeOptions|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IMigrationHistory {
    hotkeysMigrated?: (boolean|null);
    gpioMappingsMigrated?: (boolean|null);
    buttonProfilesMigrated?: (boolean|null);
    profileEnabledFlagsMigrated?: (boolean|null);
}

export class MigrationHistory implements IMigrationHistory {
    constructor(properties?: IMigrationHistory);
    public hotkeysMigrated: boolean;
    public gpioMappingsMigrated: boolean;
    public buttonProfilesMigrated: boolean;
    public profileEnabledFlagsMigrated: boolean;
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export interface IConfig {
    boardVersion?: (string|null);
    gamepadOptions?: (IGamepadOptions|null);
    hotkeyOptions?: (IHotkeyOptions|null);
    deprecatedPinMappings?: (IPinMappings|null);
    keyboardMapping?: (IKeyboardMapping|null);
    displayOptions?: (IDisplayOptions|null);
    ledOptions?: (ILEDOptions|null);
    animationOptions?: (IAnimationOptions|null);
    addonOptions?: (IAddonOptions|null);
    forcedSetupOptions?: (IForcedSetupOptions|null);
    profileOptions?: (IProfileOptions|null);
    boardConfig?: (string|null);
    gpioMappings?: (IGpioMappings|null);
    migrations?: (IMigrationHistory|null);
    peripheralOptions?: (IPeripheralOptions|null);
}

export class Config implements IConfig {
    constructor(properties?: IConfig);
    public boardVersion: string;
    public gamepadOptions?: (IGamepadOptions|null);
    public hotkeyOptions?: (IHotkeyOptions|null);
    public deprecatedPinMappings?: (IPinMappings|null);
    public keyboardMapping?: (IKeyboardMapping|null);
    public displayOptions?: (IDisplayOptions|null);
    public ledOptions?: (ILEDOptions|null);
    public animationOptions?: (IAnimationOptions|null);
    public addonOptions?: (IAddonOptions|null);
    public forcedSetupOptions?: (IForcedSetupOptions|null);
    public profileOptions?: (IProfileOptions|null);
    public boardConfig: string;
    public gpioMappings?: (IGpioMappings|null);
    public migrations?: (IMigrationHistory|null);
    public peripheralOptions?: (IPeripheralOptions|null);
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export enum ButtonLayout {
    BUTTON_LAYOUT_STICK = 0,
    BUTTON_LAYOUT_STICKLESS = 1,
    BUTTON_LAYOUT_BUTTONS_ANGLED = 2,
    BUTTON_LAYOUT_BUTTONS_BASIC = 3,
    BUTTON_LAYOUT_KEYBOARD_ANGLED = 4,
    BUTTON_LAYOUT_KEYBOARDA = 5,
    BUTTON_LAYOUT_DANCEPADA = 6,
    BUTTON_LAYOUT_TWINSTICKA = 7,
    BUTTON_LAYOUT_BLANKA = 8,
    BUTTON_LAYOUT_VLXA = 9,
    BUTTON_LAYOUT_FIGHTBOARD_STICK = 10,
    BUTTON_LAYOUT_FIGHTBOARD_MIRRORED = 11,
    BUTTON_LAYOUT_CUSTOMA = 12,
    BUTTON_LAYOUT_OPENCORE0WASDA = 13,
    BUTTON_LAYOUT_STICKLESS_13 = 14,
    BUTTON_LAYOUT_STICKLESS_16 = 15,
    BUTTON_LAYOUT_STICKLESS_14 = 16,
    BUTTON_LAYOUT_DANCEPAD_DDR_LEFT = 17,
    BUTTON_LAYOUT_DANCEPAD_DDR_SOLO = 18,
    BUTTON_LAYOUT_DANCEPAD_PIU_LEFT = 19,
    BUTTON_LAYOUT_POPN_A = 20,
    BUTTON_LAYOUT_TAIKO_A = 21,
    BUTTON_LAYOUT_BM_TURNTABLE_A = 22,
    BUTTON_LAYOUT_BM_5KEY_A = 23,
    BUTTON_LAYOUT_BM_7KEY_A = 24,
    BUTTON_LAYOUT_GITADORA_FRET_A = 25,
    BUTTON_LAYOUT_GITADORA_STRUM_A = 26,
    BUTTON_LAYOUT_BOARD_DEFINED_A = 27,
    BUTTON_LAYOUT_BANDHERO_FRET_A = 28,
    BUTTON_LAYOUT_BANDHERO_STRUM_A = 29,
    BUTTON_LAYOUT_6GAWD_A = 30,
    BUTTON_LAYOUT_6GAWD_ALLBUTTON_A = 31,
    BUTTON_LAYOUT_6GAWD_ALLBUTTONPLUS_A = 32,
    BUTTON_LAYOUT_STICKLESS_R16 = 33,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT0_A = 34,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT1_A = 35,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT2_A = 36,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT3_A = 37,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT4_A = 38,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT5_A = 39
}

export enum ButtonLayoutRight {
    BUTTON_LAYOUT_ARCADE = 0,
    BUTTON_LAYOUT_STICKLESSB = 1,
    BUTTON_LAYOUT_BUTTONS_ANGLEDB = 2,
    BUTTON_LAYOUT_VEWLIX = 3,
    BUTTON_LAYOUT_VEWLIX7 = 4,
    BUTTON_LAYOUT_CAPCOM = 5,
    BUTTON_LAYOUT_CAPCOM6 = 6,
    BUTTON_LAYOUT_SEGA2P = 7,
    BUTTON_LAYOUT_NOIR8 = 8,
    BUTTON_LAYOUT_KEYBOARDB = 9,
    BUTTON_LAYOUT_DANCEPADB = 10,
    BUTTON_LAYOUT_TWINSTICKB = 11,
    BUTTON_LAYOUT_BLANKB = 12,
    BUTTON_LAYOUT_VLXB = 13,
    BUTTON_LAYOUT_FIGHTBOARD = 14,
    BUTTON_LAYOUT_FIGHTBOARD_STICK_MIRRORED = 15,
    BUTTON_LAYOUT_CUSTOMB = 16,
    BUTTON_LAYOUT_KEYBOARD8B = 17,
    BUTTON_LAYOUT_OPENCORE0WASDB = 18,
    BUTTON_LAYOUT_STICKLESS_13B = 19,
    BUTTON_LAYOUT_STICKLESS_16B = 20,
    BUTTON_LAYOUT_STICKLESS_14B = 21,
    BUTTON_LAYOUT_DANCEPAD_DDR_RIGHT = 22,
    BUTTON_LAYOUT_DANCEPAD_PIU_RIGHT = 23,
    BUTTON_LAYOUT_POPN_B = 24,
    BUTTON_LAYOUT_TAIKO_B = 25,
    BUTTON_LAYOUT_BM_TURNTABLE_B = 26,
    BUTTON_LAYOUT_BM_5KEY_B = 27,
    BUTTON_LAYOUT_BM_7KEY_B = 28,
    BUTTON_LAYOUT_GITADORA_FRET_B = 29,
    BUTTON_LAYOUT_GITADORA_STRUM_B = 30,
    BUTTON_LAYOUT_BOARD_DEFINED_B = 31,
    BUTTON_LAYOUT_BANDHERO_FRET_B = 32,
    BUTTON_LAYOUT_BANDHERO_STRUM_B = 33,
    BUTTON_LAYOUT_6GAWD_B = 34,
    BUTTON_LAYOUT_6GAWD_ALLBUTTON_B = 35,
    BUTTON_LAYOUT_6GAWD_ALLBUTTONPLUS_B = 36,
    BUTTON_LAYOUT_STICKLESS_R16B = 37,
    BUTTON_LAYOUT_VLXB_6B = 38,
    BUTTON_LAYOUT_SEGA2P_6B = 39,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT0_B = 40,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT1_B = 41,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT2_B = 42,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT3_B = 43,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT4_B = 44,
    BUTTON_LAYOUT_BOARD_DEFINED_ALT5_B = 45
}

export enum SplashMode {
    SPLASH_MODE_STATIC = 0,
    SPLASH_MODE_RESERVED_01 = 1,
    SPLASH_MODE_RESERVED_02 = 2,
    SPLASH_MODE_NONE = 3
}

export enum SplashChoice {
    SPLASH_CHOICE_MAIN = 0,
    SPLASH_CHOICE_X = 1,
    SPLASH_CHOICE_Y = 2,
    SPLASH_CHOICE_Z = 3,
    SPLASH_CHOICE_CUSTOM = 4,
    SPLASH_CHOICE_LEGACY = 5
}

export enum OnBoardLedMode {
    ON_BOARD_LED_MODE_OFF = 0,
    ON_BOARD_LED_MODE_MODE_INDICATOR = 1,
    ON_BOARD_LED_MODE_INPUT_TEST = 2,
    ON_BOARD_LED_MODE_PS_AUTH = 3
}

export enum InputMode {
    INPUT_MODE_XINPUT = 0,
    INPUT_MODE_SWITCH = 1,
    INPUT_MODE_PS3 = 2,
    INPUT_MODE_KEYBOARD = 3,
    INPUT_MODE_PS4 = 4,
    INPUT_MODE_XBONE = 5,
    INPUT_MODE_MDMINI = 6,
    INPUT_MODE_NEOGEO = 7,
    INPUT_MODE_PCEMINI = 8,
    INPUT_MODE_EGRET = 9,
    INPUT_MODE_ASTRO = 10,
    INPUT_MODE_PSCLASSIC = 11,
    INPUT_MODE_XBOXORIGINAL = 12,
    INPUT_MODE_PS5 = 13,
    INPUT_MODE_GENERIC = 14,
    INPUT_MODE_CONFIG = 255
}

export enum InputModeAuthType {
    INPUT_MODE_AUTH_TYPE_NONE = 0,
    INPUT_MODE_AUTH_TYPE_KEYS = 1,
    INPUT_MODE_AUTH_TYPE_USB = 2,
    INPUT_MODE_AUTH_TYPE_I2C = 3
}

export enum DpadMode {
    DPAD_MODE_DIGITAL = 0,
    DPAD_MODE_LEFT_ANALOG = 1,
    DPAD_MODE_RIGHT_ANALOG = 2
}

export enum InvertMode {
    INVERT_NONE = 0,
    INVERT_X = 1,
    INVERT_Y = 2,
    INVERT_XY = 3
}

export enum SOCDMode {
    SOCD_MODE_UP_PRIORITY = 0,
    SOCD_MODE_NEUTRAL = 1,
    SOCD_MODE_SECOND_INPUT_PRIORITY = 2,
    SOCD_MODE_FIRST_INPUT_PRIORITY = 3,
    SOCD_MODE_BYPASS = 4
}

export enum GpioAction {
    NONE = -10,
    RESERVED = -5,
    ASSIGNED_TO_ADDON = 0,
    BUTTON_PRESS_UP = 1,
    BUTTON_PRESS_DOWN = 2,
    BUTTON_PRESS_LEFT = 3,
    BUTTON_PRESS_RIGHT = 4,
    BUTTON_PRESS_B1 = 5,
    BUTTON_PRESS_B2 = 6,
    BUTTON_PRESS_B3 = 7,
    BUTTON_PRESS_B4 = 8,
    BUTTON_PRESS_L1 = 9,
    BUTTON_PRESS_R1 = 10,
    BUTTON_PRESS_L2 = 11,
    BUTTON_PRESS_R2 = 12,
    BUTTON_PRESS_S1 = 13,
    BUTTON_PRESS_S2 = 14,
    BUTTON_PRESS_A1 = 15,
    BUTTON_PRESS_A2 = 16,
    BUTTON_PRESS_L3 = 17,
    BUTTON_PRESS_R3 = 18,
    BUTTON_PRESS_FN = 19,
    BUTTON_PRESS_DDI_UP = 20,
    BUTTON_PRESS_DDI_DOWN = 21,
    BUTTON_PRESS_DDI_LEFT = 22,
    BUTTON_PRESS_DDI_RIGHT = 23,
    SUSTAIN_DP_MODE_DP = 24,
    SUSTAIN_DP_MODE_LS = 25,
    SUSTAIN_DP_MODE_RS = 26,
    SUSTAIN_SOCD_MODE_UP_PRIO = 27,
    SUSTAIN_SOCD_MODE_NEUTRAL = 28,
    SUSTAIN_SOCD_MODE_SECOND_WIN = 29,
    SUSTAIN_SOCD_MODE_FIRST_WIN = 30,
    SUSTAIN_SOCD_MODE_BYPASS = 31,
    BUTTON_PRESS_TURBO = 32,
    BUTTON_PRESS_MACRO = 33,
    BUTTON_PRESS_MACRO_1 = 34,
    BUTTON_PRESS_MACRO_2 = 35,
    BUTTON_PRESS_MACRO_3 = 36,
    BUTTON_PRESS_MACRO_4 = 37,
    BUTTON_PRESS_MACRO_5 = 38,
    BUTTON_PRESS_MACRO_6 = 39,
    CUSTOM_BUTTON_COMBO = 40,
    BUTTON_PRESS_A3 = 41,
    BUTTON_PRESS_A4 = 42,
    BUTTON_PRESS_E1 = 43,
    BUTTON_PRESS_E2 = 44,
    BUTTON_PRESS_E3 = 45,
    BUTTON_PRESS_E4 = 46,
    BUTTON_PRESS_E5 = 47,
    BUTTON_PRESS_E6 = 48,
    BUTTON_PRESS_E7 = 49,
    BUTTON_PRESS_E8 = 50,
    BUTTON_PRESS_E9 = 51,
    BUTTON_PRESS_E10 = 52,
    BUTTON_PRESS_E11 = 53,
    BUTTON_PRESS_E12 = 54,
    DIGITAL_DIRECTION_UP = 55,
    DIGITAL_DIRECTION_DOWN = 56,
    DIGITAL_DIRECTION_LEFT = 57,
    DIGITAL_DIRECTION_RIGHT = 58,
    ANALOG_DIRECTION_LS_X_NEG = 59,
    ANALOG_DIRECTION_LS_X_POS = 60,
    ANALOG_DIRECTION_LS_Y_NEG = 61,
    ANALOG_DIRECTION_LS_Y_POS = 62,
    ANALOG_DIRECTION_RS_X_NEG = 63,
    ANALOG_DIRECTION_RS_X_POS = 64,
    ANALOG_DIRECTION_RS_Y_NEG = 65,
    ANALOG_DIRECTION_RS_Y_POS = 66,
    ANALOG_DIRECTION_MOD_LOW = 67,
    ANALOG_DIRECTION_MOD_HIGH = 68,
    BUTTON_PRESS_INPUT_REVERSE = 69,
    SUSTAIN_FOCUS_MODE = 70,
    SUSTAIN_4_8_WAY_MODE = 71,
    MENU_NAVIGATION_UP = 72,
    MENU_NAVIGATION_DOWN = 73,
    MENU_NAVIGATION_LEFT = 74,
    MENU_NAVIGATION_RIGHT = 75,
    MENU_NAVIGATION_SELECT = 76,
    MENU_NAVIGATION_BACK = 77,
    MENU_NAVIGATION_TOGGLE = 78
}

export enum GpioDirection {
    GPIO_DIRECTION_INPUT = 0,
    GPIO_DIRECTION_OUTPUT = 1
}

export enum GamepadHotkey {
    HOTKEY_NONE = 0,
    HOTKEY_DPAD_DIGITAL = 1,
    HOTKEY_DPAD_LEFT_ANALOG = 2,
    HOTKEY_DPAD_RIGHT_ANALOG = 3,
    HOTKEY_HOME_BUTTON = 4,
    HOTKEY_CAPTURE_BUTTON = 5,
    HOTKEY_SOCD_UP_PRIORITY = 6,
    HOTKEY_SOCD_NEUTRAL = 7,
    HOTKEY_SOCD_LAST_INPUT = 8,
    HOTKEY_INVERT_X_AXIS = 9,
    HOTKEY_INVERT_Y_AXIS = 10,
    HOTKEY_SOCD_FIRST_INPUT = 11,
    HOTKEY_SOCD_BYPASS = 12,
    HOTKEY_TOGGLE_4_WAY_MODE = 13,
    HOTKEY_TOGGLE_DDI_4_WAY_MODE = 14,
    HOTKEY_LOAD_PROFILE_1 = 15,
    HOTKEY_LOAD_PROFILE_2 = 16,
    HOTKEY_LOAD_PROFILE_3 = 17,
    HOTKEY_LOAD_PROFILE_4 = 18,
    HOTKEY_L3_BUTTON = 19,
    HOTKEY_R3_BUTTON = 20,
    HOTKEY_TOUCHPAD_BUTTON = 21,
    HOTKEY_REBOOT_DEFAULT = 22,
    HOTKEY_B1_BUTTON = 23,
    HOTKEY_B2_BUTTON = 24,
    HOTKEY_B3_BUTTON = 25,
    HOTKEY_B4_BUTTON = 26,
    HOTKEY_L1_BUTTON = 27,
    HOTKEY_R1_BUTTON = 28,
    HOTKEY_L2_BUTTON = 29,
    HOTKEY_R2_BUTTON = 30,
    HOTKEY_S1_BUTTON = 31,
    HOTKEY_S2_BUTTON = 32,
    HOTKEY_A1_BUTTON = 33,
    HOTKEY_A2_BUTTON = 34,
    HOTKEY_NEXT_PROFILE = 35,
    HOTKEY_A3_BUTTON = 36,
    HOTKEY_A4_BUTTON = 37,
    HOTKEY_DPAD_UP = 38,
    HOTKEY_DPAD_DOWN = 39,
    HOTKEY_DPAD_LEFT = 40,
    HOTKEY_DPAD_RIGHT = 41,
    HOTKEY_PREVIOUS_PROFILE = 42,
    HOTKEY_SAVE_CONFIG = 43,
    HOTKEY_MENU_NAV_UP = 44,
    HOTKEY_MENU_NAV_DOWN = 45,
    HOTKEY_MENU_NAV_LEFT = 46,
    HOTKEY_MENU_NAV_RIGHT = 47,
    HOTKEY_MENU_NAV_SELECT = 48,
    HOTKEY_MENU_NAV_BACK = 49,
    HOTKEY_MENU_NAV_TOGGLE = 50,
    HOTKEY_LEDS_NONE = 51,
    HOTKEY_LEDS_ANIMATION_UP = 52,
    HOTKEY_LEDS_ANIMATION_DOWN = 53,
    HOTKEY_LEDS_PARAMETER_UP = 54,
    HOTKEY_LEDS_PRESS_PARAMETER_UP = 55,
    HOTKEY_LEDS_PRESS_PARAMETER_DOWN = 56,
    HOTKEY_LEDS_PARAMETER_DOWN = 57,
    HOTKEY_LEDS_BRIGHTNESS_UP = 58,
    HOTKEY_LEDS_BRIGHTNESS_DOWN = 59,
    HOTKEY_LEDS_FADETIME_UP = 60,
    HOTKEY_LEDS_FADETIME_DOWN = 61,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_CHANGE = 62,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_ON_OFF = 63,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_BRIGHTNESS_UP = 64,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_BRIGHTNESS_DOWN = 65,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_PARAMETER_UP = 66,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_PARAMETER_DOWN = 67,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_FRAME_SPEED_UP = 68,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_FRAME_SPEED_DOWN = 69,
    HOTKEY_AMBIENT_LIGHT_EFFECTS_CUSTOM_LINKAGE = 70,
    HOTKEY_LOAD_PROFILE_5 = 71,
    HOTKEY_LOAD_PROFILE_6 = 72,
    HOTKEY_ENABLE_4_WAY_MODE = 73,
    HOTKEY_DISABLE_4_WAY_MODE = 74,
    HOTKEY_TURBO_COUNT_UP = 75,
    HOTKEY_TURBO_COUNT_DOWN = 76
}

export enum LEDFormat_Proto {
    LED_FORMAT_GRB = 0,
    LED_FORMAT_RGB = 1,
    LED_FORMAT_GRBW = 2,
    LED_FORMAT_RGBW = 3
}

export enum ShmupMixMode {
    SHMUP_MIX_MODE_TURBO_PRIORITY = 0,
    SHMUP_MIX_MODE_CHARGE_PRIORITY = 1
}

export enum PLEDType {
    PLED_TYPE_NONE = -1,
    PLED_TYPE_PWM = 0,
    PLED_TYPE_RGB = 1
}

export enum CaseRGBType {
    CASE_RGB_TYPE_NONE = -1,
    CASE_RGB_TYPE_AMBIENT = 0,
    CASE_RGB_TYPE_LINKED = 1
}

export enum ForcedSetupMode {
    FORCED_SETUP_MODE_OFF = 0,
    FORCED_SETUP_MODE_LOCK_MODE_SWITCH = 1,
    FORCED_SETUP_MODE_LOCK_WEB_CONFIG = 2,
    FORCED_SETUP_MODE_LOCK_BOTH = 3
}

export enum DualDirectionalCombinationMode {
    MIXED_MODE = 0,
    GAMEPAD_MODE = 1,
    DUAL_MODE = 2,
    NONE_MODE = 3
}

export enum PS4ControllerType {
    PS4_CONTROLLER = 0,
    PS4_ARCADESTICK = 7
}

export enum MacroType {
    ON_PRESS = 1,
    ON_HOLD_REPEAT = 2,
    ON_TOGGLE = 3
}

export enum RotaryEncoderPinMode {
    ENCODER_MODE_NONE = 0,
    ENCODER_MODE_LEFT_ANALOG_X = 1,
    ENCODER_MODE_LEFT_ANALOG_Y = 2,
    ENCODER_MODE_RIGHT_ANALOG_X = 3,
    ENCODER_MODE_RIGHT_ANALOG_Y = 4,
    ENCODER_MODE_LEFT_TRIGGER = 5,
    ENCODER_MODE_RIGHT_TRIGGER = 6,
    ENCODER_MODE_DPAD_X = 7,
    ENCODER_MODE_DPAD_Y = 8,
    ENCODER_MODE_VOLUME = 9
}

export enum ReactiveLEDMode {
    REACTIVE_LED_STATIC_OFF = 0,
    REACTIVE_LED_STATIC_ON = 1,
    REACTIVE_LED_FADE_IN = 2,
    REACTIVE_LED_FADE_OUT = 3
}

export enum PS4ControllerIDMode {
    PS4_ID_CONSOLE = 0,
    PS4_ID_EMULATION = 1
}

export enum DisplaySaverMode {
    DISPLAY_SAVER_DISPLAY_OFF = 0,
    DISPLAY_SAVER_SNOW = 1,
    DISPLAY_SAVER_BOUNCE = 2,
    DISPLAY_SAVER_PIPES = 3,
    DISPLAY_SAVER_TOAST = 4
}

export enum ButtonLayoutOrientation {
    BUTTON_ORIENTATION_DEFAULT = 0,
    BUTTON_ORIENTATION_SOUTHPAW = 1,
    BUTTON_ORIENTATION_SWITCHED = 2
}
