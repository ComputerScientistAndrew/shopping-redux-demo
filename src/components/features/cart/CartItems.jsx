const CartItems = () => {
  const cart = [];
  if (cart.length === 0) {
    return <div>Your cart is empty...</div>;
  }
  return (
    <ul className='cart'>
      {cart.map((item) => (
        <li key={item.id}>
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>${item.price}</div>
          <div>Quantity: {item.quantity ?? 0}</div>
          <div>
            <button>Remove from Cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
