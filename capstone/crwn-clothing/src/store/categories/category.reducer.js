import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
  categories: []
};

// want to assign action a default so it doesn't throw an error when no action is passed
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {...state, categories: payload};
    default:
      return state;
  }
};