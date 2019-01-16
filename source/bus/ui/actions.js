// Types
import { types } from './types';

export const startSpinner = () => {
    return {
        type: types.START_FETCHING,
    };
};

export const stopSpinner = () => {
    return {
        type: types.STOP_FETCHING,
    };
};


export const clearNotification = () => {
    return {
        type: types.CLEAR_NOTIFICATION,
    };
};

export const fillNotification = (notification) => {
    return {
        type:    types.FILL_NOTIFICATION,
        payload: notification, // Object { type: 'info|error', text:'string' }
    };
};
