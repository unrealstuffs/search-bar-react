import { ColorsAction, ColorsActionTypes } from "../types/colors";
import { Dispatch } from "redux";

export const setColors =
    (colors: string[]) => (dispatch: Dispatch<ColorsAction>) => {
        try {
            localStorage.setItem("colors", JSON.stringify(colors));
            dispatch({
                type: ColorsActionTypes.SET_COLORS,
                payload: colors,
            });
        } catch (error) {
            throw error;
        }
    };
