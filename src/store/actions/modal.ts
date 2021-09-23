import { ModalAction, ModalActionTypes } from "../types/modal";
import { Dispatch } from "redux";

export const toggleModal =
    (isOpen: boolean) => (dispatch: Dispatch<ModalAction>) => {
        dispatch({
            type: ModalActionTypes.TOGGLE_MODAL,
            payload: isOpen,
        });
    };
