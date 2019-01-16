//Core
import { apply, put, call } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { fillPersones } from '../../actions';
import { startSpinner, stopSpinner } from '../../../ui/actions';

export function * fetchPersonesWorker ({payload}) {
    try {
        yield put(startSpinner());

        const persones = yield apply(api, api.person.get, [ payload ]);
        yield put(fillPersones(persones));
    } catch (error) {
        console.log('fetchPersonesWorker', error);
    } finally {
        yield put(stopSpinner());
    }
}
