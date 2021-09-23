import { CategoryAction, CategoryActionTypes } from "../types/category";
import { Dispatch } from "redux";

export const setCategory =
    (currCat: string | null) => (dispatch: Dispatch<CategoryAction>) => {
        dispatch({
            type: CategoryActionTypes.SET_CURRENT_CATEGORY,
            payload: currCat,
        });
    };
