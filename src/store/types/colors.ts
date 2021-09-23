export interface ColorsState {
    colors: string[];
}

export enum ColorsActionTypes {
    GET_COLORS = "GET_COLORS",
    SET_COLORS = "SET_COLORS",
}

interface GetColorsAction {
    type: ColorsActionTypes.GET_COLORS;
}

interface SetColorsAction {
    type: ColorsActionTypes.SET_COLORS;
    payload: string[];
}

export type ColorsAction = GetColorsAction | SetColorsAction;
