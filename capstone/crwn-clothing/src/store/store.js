import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// middleware is what the dispatched action will hit before going to the reducers
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// every time the state changes, it will hit this line of code and the change will be logged
export const store = createStore(rootReducer, undefined, composedEnhancers);