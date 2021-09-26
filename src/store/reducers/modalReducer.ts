import { ModalAction, ModalActionTypes, ModalState } from "../types/modal";

const initialState: ModalState = {
    isOpen: false,
};

export const settingsModalReducer = (
    state = initialState,
    action: ModalAction
): ModalState => {
    switch (action.type) {
        case ModalActionTypes.TOGGLE_SETTINGS_MODAL:
            return {
                ...state,
                isOpen: action.payload,
            };
        default:
            return state;
    }
};

export const appsModalReducer = (
    state = initialState,
    action: ModalAction
): ModalState => {
    switch (action.type) {
        case ModalActionTypes.TOGGLE_APPS_MODAL:
            return {
                ...state,
                isOpen: action.payload,
            };
        default:
            return state;
    }
};
