import { ColorsAction, ColorsActionTypes, ColorsState } from "../types/colors";

const initialState: ColorsState = {
    colors: localStorage.getItem("colors")
        ? JSON.parse(localStorage.getItem("colors") || "[]")
        : [],
};

export const colorsReducer = (
    state = initialState,
    action: ColorsAction
): ColorsState => {
    switch (action.type) {
        case ColorsActionTypes.SET_COLORS:
            return {
                ...state,
                colors: action.payload,
            };
        default:
            return state;
    }
};
