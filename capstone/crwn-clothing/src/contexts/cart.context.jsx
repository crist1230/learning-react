import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

// const removeCartItem = (cartItems, cartItemToRemove) => {

//   const existingCartItem = cartItems.find((cartItem) => 
//     cartItem.id === cartItemToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
//   }

//   return cartItems.map((cartItem) => (
//     cartItem.id === cartItemToRemove.id ?
//     {...cartItem, quantity: cartItem.quantity - 1} :
//     cartItem
//   )); 
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) => cartItem.id === productToAdd.id
//       ? { ...cartItem, quantity: cartItem.quantity + 1 }
//       : cartItem
//     );
//   }

//   return [...cartItems,  {...productToAdd, quantity: 1 }];
// };

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});


export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    // const newCartCount = newCartItems.reduce((total, cartItem) => (
    //   total + cartItem.quantity
    // ), 0);

    // const newCartTotal = newCartItems.reduce((total, cartItem) => (
    //   total + cartItem.price*cartItem.quantity
    // ), 0);

    // dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal }));
  };

  // const addItemToCart = (productToAdd) => {
  //   const newCartItems = (addCartItem(cartItems, productToAdd));
  //   updateCartItemsReducer(newCartItems);
  // };

  // const removeItemFromCart = (cartItemToRemove) => {
  //   const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
  //   updateCartItemsReducer(newCartItems);
  // };

  // const clearItemFromCart = (cartItemToClear) => {
  //   const newCartItems = (clearCartItem(cartItems, cartItemToClear));
  //   updateCartItemsReducer(newCartItems);
  // };

  // const setIsCartOpen = () => {
  //   dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen));
  // };

  // const value = {
  //   isCartOpen,
  //   setIsCartOpen,
  //   addItemToCart,
  //   removeItemFromCart,
  //   clearItemFromCart,
  //   cartItems,
  //   cartCount,
  //   cartTotal
//   // };
  
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };