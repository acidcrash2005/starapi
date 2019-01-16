// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//Reducers
import { uiReducer as ui } from '../bus/ui/reducer';
import { personesReducer as persones, personReducer as person } from '../bus/person/reducer';

export default (history) => combineReducers({
    ui,
    persones,
    person,
    router: connectRouter(history),
});
