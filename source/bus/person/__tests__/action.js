//Actions
import * as actions from '../actions';

//Types
import { types } from '../types';

describe('person actions:', () => {
    test('createPostAsync', () => {
        expect(actions.createPostAsync(__.post)).toEqual({
            type:    types.CREATE_POST_ASYNC,
            payload: __.post,
        });
    });
});
