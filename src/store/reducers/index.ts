import { combineReducers } from "redux";
import { appsModalReducer, settingsModalReducer } from "./modalReducer";
import { settingsReducer } from "./settingsReducer";
import { categoryReducer } from "./categoryReducer";
import { photosReducer } from "./photosReducer";
import { colorsReducer } from "./colorsReducer";
import { appsReducer } from "./appsReducer";

export const rootReducer = combineReducers({
    settingsModal: settingsModalReducer,
    appsModal: appsModalReducer,
    settings: settingsReducer,
    category: categoryReducer,
    photos: photosReducer,
    colors: colorsReducer,
    apps: appsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
