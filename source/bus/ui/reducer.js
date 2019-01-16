//Core
import { Map, fromJS } from 'immutable';

// Types
import {types} from './types';

const initialState = Map({
    isFetching:   false,
    notification: '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);

        case types.STOP_FETCHING:
            return state.set('isFetching', false);

        case types.FILL_NOTIFICATION:
            return state.set('notification', fromJS(action.payload));

        case types.CLEAR_NOTIFICATION:
            return state.set('notification', '');

        default:
            return state;
    }
};
