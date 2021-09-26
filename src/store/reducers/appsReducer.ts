import { AppsAction, AppsActionTypes, AppsState } from "../types/apps";

const initialState: AppsState = {
    apps: [],
    loading: false,
    error: null,
};

export const setApps = (
    state = initialState,
    action: AppsAction
): AppsState => {
    switch (action.type) {
        case AppsActionTypes.SET_APPS_REQUEST:
            return {
                loading: true,
                error: null,
                apps: [],
            };
        case AppsActionTypes.SET_APPS_SUCCESS:
            return {
                loading: false,
                error: null,
                apps: action.payload,
            };
        case AppsActionTypes.SET_APPS_ERROR:
            return {
                loading: false,
                error: action.payload,
                apps: [],
            };
        default:
            return state;
    }
};
