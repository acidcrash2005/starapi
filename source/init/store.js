//Core
import { createStore } from 'redux';

//Reducer
import createRootReducer from './rootReducer';

//RootSaga
import { rootSaga } from './rootSaga';

//Middleware
import { history, enhancedStore, sagaMiddleware} from './middleware/core';

export const store = createStore(createRootReducer(history), enhancedStore);

sagaMiddleware.run(rootSaga);
