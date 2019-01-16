//Core
import { apply, put, call } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { fillPersones } from '../../actions';
import { startSpinner, stopSpinner } from '../../../ui/actions';

export function * searchPersonesWorker ({payload}) {
    try {
        yield put(startSpinner());

        const persones = yield apply(api, api.person.search, [ payload ]);
        yield put(fillPersones(persones));
    } catch (error) {
        console.log('searchPersonesWorker', error);
    } finally {
        yield put(stopSpinner());
    }
}
