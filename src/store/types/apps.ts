export interface AppsState {
    apps: string[];
    loading: boolean;
    error: string | null;
}

export enum AppsActionTypes {
    SET_APPS_REQUEST = "SET_APPS_REQUEST",
    SET_APPS_SUCCESS = "SET_APPS_SUCCESS",
    SET_APPS_ERROR = "SET_APPS_ERROR",
}

interface SetAppsAction {
    type: AppsActionTypes.SET_APPS_REQUEST;
}

interface SetAppsSuccessAction {
    type: AppsActionTypes.SET_APPS_SUCCESS;
    payload: string[];
}

interface SetAppsErrorAction {
    type: AppsActionTypes.SET_APPS_ERROR;
    payload: string;
}

export type AppsAction =
    | SetAppsAction
    | SetAppsSuccessAction
    | SetAppsErrorAction;
