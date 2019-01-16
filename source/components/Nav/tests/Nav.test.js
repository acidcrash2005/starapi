// Test utilities
import {
    result,
} from './setup';

describe('component Nav', () => {
    describe('must have basic JSX markup:', () => {
        test('must match the layout markup', () => {
            expect(result).toMatchSnapshot();
        });
    });
});
