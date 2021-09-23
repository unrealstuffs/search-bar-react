import { ModalAction, ModalActionTypes, ModalState } from "../types/modal";

const initialState: ModalState = {
    isOpen: false,
};

export const modalReducer = (
    state = initialState,
    action: ModalAction
): ModalState => {
    switch (action.type) {
        case ModalActionTypes.TOGGLE_MODAL:
            return {
                ...state,
                isOpen: action.payload,
            };
        default:
            return state;
    }
};
