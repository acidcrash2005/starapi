//Core
import { apply, put, call } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { fillPerson, fillFilms, fillSpecies, fillStarships, fillVehicles} from '../../actions';
import { startSpinner, stopSpinner } from '../../../ui/actions';

export function * fetchPersonWorker ({payload}) {
    try {
        yield put(startSpinner());

        const person = yield apply(api, api.person.getPerson, [ payload ]);
        const films = yield apply(api, api.person.getUrlListData, [ person.films ]);
        const species = yield apply(api, api.person.getUrlListData, [ person.species ]);
        const vehicles = yield apply(api, api.person.getUrlListData, [ person.vehicles ]);
        const starships = yield apply(api, api.person.getUrlListData, [ person.starships ]);

        yield put(fillPerson(person));
        yield put(fillFilms(films));
        yield put(fillSpecies(species));
        yield put(fillVehicles(vehicles));
        yield put(fillStarships(starships));
    } catch (error) {
        console.log('fetchPersonWorker', error);
    } finally {
        yield put(stopSpinner());
    }
}
