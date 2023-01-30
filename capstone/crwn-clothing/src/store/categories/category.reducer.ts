import { AnyAction } from 'redux';

import { Category } from './category.types';

import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

// objects of this type can never be modified, only read (w/ reducers you never modify state you only spread over)
export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

// want to assign action a default so it doesn't throw an error when no action is passed
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }

  return state;
};