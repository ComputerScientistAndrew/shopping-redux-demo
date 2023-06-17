import { products } from '../../../shared/PRODUCTS.js';

const Products = (props) => {
  return (
    <section className='products-section'>
      <h3>Our Products</h3>
      <main className='products'>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img src={product.img} alt={product.name} />
              </div>
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
              <div>
                <button>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Products;
