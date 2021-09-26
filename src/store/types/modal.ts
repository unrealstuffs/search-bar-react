export interface ModalState {
    isOpen: boolean;
}

export enum ModalActionTypes {
    TOGGLE_SETTINGS_MODAL = "TOGGLE_SETTINGS_MODAL",
    TOGGLE_APPS_MODAL = "TOGGLE_APPS_MODAL",
}

interface ToggleModalAction {
    type: ModalActionTypes.TOGGLE_SETTINGS_MODAL;
    payload: boolean;
}

interface ToggleAppsModal {
    type: ModalActionTypes.TOGGLE_APPS_MODAL;
    payload: boolean;
}

export type ModalAction = ToggleModalAction | ToggleAppsModal;
