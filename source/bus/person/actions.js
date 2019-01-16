// Types
import { types } from './types';

//Async
export const fetchPersonesAsync = (page) => ({
    type:    types.FETCH_PERSONES_ASYNC,
    payload: page,
});

export const searchPersonesAsync = (search) => ({
    type:    types.SEARCH_PERSONES_ASYNC,
    payload: search,
});

export const fetchPersonAsync = (id) => ({
    type:    types.FETCH_PERSON_ASYNC,
    payload: id,
});

//Sync
export const fillPersones = (data) => {
    return {
        type:    types.FILL_PERSONES,
        payload: data,
    };
};

export const fillPerson = (data) => {
    return {
        type:    types.FILL_PERSON,
        payload: data,
    };
};

export const fillFilms = (films) => {
    return {
        type:    types.FILL_FILMS,
        payload: films,
    };
};

export const fillSpecies = (species) => {
    return {
        type:    types.FILL_SPECIES,
        payload: species,
    };
};

export const fillVehicles = (vehicles) => {
    return {
        type:    types.FILL_VEHICLES,
        payload: vehicles,
    };
};

export const fillStarships = (starships) => {
    return {
        type:    types.FILL_STARSHIPS,
        payload: starships,
    };
};

export const clearPerson = () => {
    return {
        type: types.CLEAR_PERSON,
    };
};
