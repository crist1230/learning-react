import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <h3>{quantity}</h3>
    </div>
  );
};

export default CartItem;