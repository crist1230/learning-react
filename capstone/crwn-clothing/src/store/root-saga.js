import { all, call } from 'redux-saga/effects'; 

import { categoriesSaga } from './categories/category.saga';

// function* is ES6 syntax for a generator function
export function* rootSaga() {
  yield all([call(categoriesSaga)]);
};