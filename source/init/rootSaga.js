//Core
import {all, call} from 'redux-saga/effects';

//Watcher
import { watchPerson } from '../bus/person/saga/wtchers';

export function* rootSaga() {
    yield all([  call(watchPerson) ]);
}
