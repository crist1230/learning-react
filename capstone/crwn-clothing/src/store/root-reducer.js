import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

// this is the state of the reducer
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});