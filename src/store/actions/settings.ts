import {
    SettingsAction,
    SettingsActionTypes,
    SettingsState,
} from "../types/settings";
import { Dispatch } from "redux";

export const setSettings =
    (settings: SettingsState) => (dispatch: Dispatch<SettingsAction>) => {
        try {
            localStorage.setItem("settings", JSON.stringify(settings));
            dispatch({
                type: SettingsActionTypes.SET_SETTINGS,
                payload: settings,
            });
        } catch (error) {
            throw error;
        }
    };
