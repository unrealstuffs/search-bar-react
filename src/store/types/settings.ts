export interface SettingsState {
    searchSystem: string;
    background: string;
    roundingLine: number;
    theme: string;
}

export enum SettingsActionTypes {
    SET_SETTINGS = "SET_SETTINGS",
}

interface SetSettingsAction {
    type: SettingsActionTypes.SET_SETTINGS;
    payload: any;
}

export type SettingsAction = SetSettingsAction;
