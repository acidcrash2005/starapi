//Core
import { List, fromJS, Map } from 'immutable';

// Types
import {types} from './types';

const personesInitialState = List();

export const personesReducer = (state = personesInitialState, action) => {
    switch (action.type) {
        case types.FILL_PERSONES:
            return fromJS(action.payload);


        default:
            return state;
    }
};

const personeInitialState = Map();

export const personReducer = (state = personeInitialState, action) => {
    switch (action.type) {
        case types.FILL_PERSON:
            return fromJS(action.payload);

        case types.FILL_FILMS:
            return state.updateIn([ 'films' ], ()=> fromJS(action.payload));

        case types.FILL_SPECIES:
            return state.updateIn([ 'species' ], ()=> fromJS(action.payload));

        case types.FILL_VEHICLES:
            return state.updateIn([ 'vehicles' ], ()=> fromJS(action.payload));

        case types.FILL_STARSHIPS:
            return state.updateIn([ 'starships' ], ()=> fromJS(action.payload));

        case types.CLEAR_PERSON:
            return personeInitialState;

        default:
            return state;
    }
};
