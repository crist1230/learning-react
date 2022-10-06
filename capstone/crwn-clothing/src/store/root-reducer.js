import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';

// this is the state of the reducer
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
});