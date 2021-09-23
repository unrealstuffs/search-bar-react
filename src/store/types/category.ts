export interface CategoryState {
    currCat: string | null;
}

export enum CategoryActionTypes {
    SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY",
}

interface SetCategoryAction {
    type: CategoryActionTypes.SET_CURRENT_CATEGORY;
    payload: string | null;
}

export type CategoryAction = SetCategoryAction;
