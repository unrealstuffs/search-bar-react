import {
    SettingsAction,
    SettingsActionTypes,
    SettingsState,
} from "../types/settings";
import { Dispatch } from "redux";

export const setSettings =
    (settings: SettingsState) => (dispatch: Dispatch<SettingsAction>) => {
        dispatch({
            type: SettingsActionTypes.SET_SETTINGS,
            payload: settings,
        });
    };
