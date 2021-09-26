import {
    SettingsAction,
    SettingsActionTypes,
    SettingsState,
} from "../types/settings";

let initialState: SettingsState;

if (localStorage.getItem("settings")) {
    initialState = JSON.parse(localStorage.getItem("settings") || "{}");
} else {
    initialState = {
        searchSystem: "yandex",
        background:
            "url(https://images.unsplash.com/photo-1533717993428-cb1b3810dee1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4491527eac86ad79151a04e568d1429&auto=format&fit=crop&w=1920)",
        roundingLine: 5,
        theme: "light",
    };
}

export const settingsReducer = (
    state = initialState,
    action: SettingsAction
) => {
    switch (action.type) {
        case SettingsActionTypes.SET_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };
        default:
            return state;
    }
};
