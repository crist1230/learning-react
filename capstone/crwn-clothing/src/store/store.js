import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root', // where you want the persisting to reach (so here the root of the app)
  storage, // where you want to store persisted value (here this means local storage)
  blacklist: ['user'] // values we don't want persisted (because user is being listened to we don't need to persist)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// middleware is what the dispatched action will hit before going to the reducers
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composedEnhancer = 
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// every time the state changes, it will hit this line of code and the change will be logged
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);