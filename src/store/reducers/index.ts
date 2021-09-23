import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { settingsReducer } from "./settingsReducer";
import { categoryReducer } from "./categoryReducer";
import { photosReducer } from "./photosReducer";
import { colorsReducer } from "./colorsReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    settings: settingsReducer,
    category: categoryReducer,
    photos: photosReducer,
    colors: colorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
