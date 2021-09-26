export interface ColorsState {
    colors: string[];
}

export enum ColorsActionTypes {
    SET_COLORS = "SET_COLORS",
}

interface SetColorsAction {
    type: ColorsActionTypes.SET_COLORS;
    payload: string[];
}

export type ColorsAction = SetColorsAction;
