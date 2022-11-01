"use strict";

import {APP_CRASH, TOGGLE_DISABLE_APP} from "./AppActions";

const initialState = {
    version: window._ver,
    environment: window._env,

    appCrashed: false,
    appDisabled: false
};

// noinspection JSUnusedLocalSymbols
export default function AppReducer(state = initialState, action) {
    switch (action.type) {

        case TOGGLE_DISABLE_APP:
            return {
                ...state,
                appDisabled: action.isDisabled
            };

        case APP_CRASH:
            return {
                ...state,
                appCrashed: {
                    error: action.error,
                    errorInfo: action.errorInfo
                }
            };

        default: {
            return state;
        }

    }
}