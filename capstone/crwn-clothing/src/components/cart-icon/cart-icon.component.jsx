import { useSelector, useDispatch } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';

import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;