import { ModalAction, ModalActionTypes } from "../types/modal";
import { Dispatch } from "redux";

export const toggleSettingsModal =
    (isOpen: boolean) => (dispatch: Dispatch<ModalAction>) => {
        dispatch({
            type: ModalActionTypes.TOGGLE_SETTINGS_MODAL,
            payload: isOpen,
        });
    };

export const toggleAppsModal =
    (isOpen: boolean) => (dispatch: Dispatch<ModalAction>) => {
        dispatch({
            type: ModalActionTypes.TOGGLE_APPS_MODAL,
            payload: isOpen,
        });
    };
