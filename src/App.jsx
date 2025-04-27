import { useState, useEffect } from 'react';
import './App.css';
import { Products } from './app/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoaded(false);
      const repo = await fetch('https://fakestoreapi.com/products');
      const data = await repo.json();
      console.log(data);
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Failed to fetch API", error);
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      
      {isLoaded ? (
        products.map((prod) => {
          return <Products item={prod}  />
})
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
