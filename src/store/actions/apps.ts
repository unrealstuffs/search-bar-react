import { Dispatch } from "redux";
import { AppsActionTypes } from "../types/apps";

export const setApps = (apps: string[]) => (dispatch: Dispatch) => {
    try {
        dispatch({
            type: AppsActionTypes.SET_APPS_REQUEST,
        });
        dispatch({
            type: AppsActionTypes.SET_APPS_SUCCESS,
            payload: apps,
        });
    } catch (error) {
        dispatch({
            type: AppsActionTypes.SET_APPS_ERROR,
            payload: "Ошибка записи",
        });
    }
};
