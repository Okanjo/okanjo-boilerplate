"use strict";

export const TOGGLE_DISABLE_APP = 'TOGGLE_DISABLE_APP';
export function toggleDisableApp(isDisabled) {
    return {
        type: TOGGLE_DISABLE_APP,
        isDisabled
    };
}

export const APP_CRASH = 'APP_CRASH';
export function crashApp(error, errorInfo) {
    return {
        type: APP_CRASH,
        error,
        errorInfo
    };
}