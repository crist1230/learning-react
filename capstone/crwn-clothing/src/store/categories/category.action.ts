import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

// no payload (see no parameter here)
export const fetchCategoriesStart = () => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = (categoriesArray: object[]) => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = (error: Error) => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error) 
);
