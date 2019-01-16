//Core
import { applyMiddleware, compose } from 'redux';
import { createLogger } from  'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => 'dodgerblue',
        action:    () => 'greenyellow',
        nextState: () => 'olivedrab',
        error:     () => 'firebrick',
    },
});

const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [ routerMiddleware, sagaMiddleware ];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

export { enhancedStore, history, sagaMiddleware };

