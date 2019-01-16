//Core
import {fromJS, List, Map} from 'immutable';

//Reducer
import { postsReducer, postReducer } from '../reducer';

//Actions
import * as postActions from '../actions';

const initialState = List();

describe('person reducer:', () => {
    test('should return state by default', () => {
        expect(postsReducer(void 0, {type: __.testAction})).toEqual(
            initialState,
        );
    });
});

describe('post reducer:', () => {
    test('should return state by default', () => {
        expect(postReducer(void 0, {type: __.testAction})).toEqual(
            Map(),
        );
    });
    test('should handle CREATE_POST action', () => {
        expect(postReducer(void 0, postActions.createPost(__.post))).toEqual(
            fromJS(__.post),
        );
    });
});
