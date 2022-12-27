import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

import { CategoryAction } from './category.action';

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
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoryAction) => {
  switch(action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};