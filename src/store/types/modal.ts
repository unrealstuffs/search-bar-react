export interface ModalState {
    isOpen: boolean;
}

export enum ModalActionTypes {
    TOGGLE_MODAL = "TOGGLE_MODAL",
}

interface ToggleModalAction {
    type: ModalActionTypes.TOGGLE_MODAL;
    payload: boolean;
}

export type ModalAction = ToggleModalAction;
