import {
    CategoryAction,
    CategoryState,
    CategoryActionTypes,
} from "../types/category";

const initialState: CategoryState = {
    currCat: null,
};

export const categoryReducer = (
    state = initialState,
    action: CategoryAction
): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currCat: action.payload,
            };
        default:
            return state;
    }
};
