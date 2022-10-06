import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
<<<<<<< HEAD
import { categoriesReducer } from './categories/category.reducer';
=======
import { cartReducer } from './cart/cart.reducer';
>>>>>>> 4bf121cc50d400327f2d5e56ff6e61268d892afc

// this is the state of the reducer
export const rootReducer = combineReducers({
  user: userReducer,
<<<<<<< HEAD
  categories: categoriesReducer
=======
  cart: cartReducer
>>>>>>> 4bf121cc50d400327f2d5e56ff6e61268d892afc
});