import { takeLatest, all, call, put } from 'redux-saga/effects';

import { CATEGORIES_ACTION_TYPES } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

export function* fetchCategoriesAsync() {
  try {
    // call(this is the method, call it with these parameters)
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    // put == dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
};

export function* onFetchCategories() {
  /* takeLastest() says:
   * "if a bunch of the same action gets fired, only use the most recent one"
   * first argument is what action you wanna listen for and the second argument is what you'll do */
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
};

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
};