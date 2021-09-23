import { ColorsAction, ColorsActionTypes } from "../types/colors";
import { Dispatch } from "redux";

export const setColors =
    (colors: string[]) => (dispatch: Dispatch<ColorsAction>) => {
        dispatch({
            type: ColorsActionTypes.SET_COLORS,
            payload: colors,
        });
    };
