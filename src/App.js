import './App.css';
import Products from './components/features/products/Products';
import Cart from './components/features/cart/Cart';

export default function App() {
  const cartQuantity = 0;

  return (
    <div className='App'>
      <h1 className='title'>Amazona</h1>
      <h4>Look through our assortment of items!</h4>
      <p className='cart-count'>
        <strong>Cart:</strong> {cartQuantity}
      </p>
      <Products />
      <Cart />
    </div>
  );
}
