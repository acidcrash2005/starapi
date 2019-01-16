//Core
import { takeEvery } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { fetchPersonesWorker } from './workers/fetchPersonesWorker';
import { fetchPersonWorker } from './workers/fetchPersonWorker';
import { searchPersonesWorker } from './workers/searchPersonesWorker';

export function* watchPerson() {
    yield takeEvery(types.FETCH_PERSONES_ASYNC, fetchPersonesWorker);
    yield takeEvery(types.FETCH_PERSON_ASYNC, fetchPersonWorker);
    yield takeEvery(types.SEARCH_PERSONES_ASYNC, searchPersonesWorker);
}
