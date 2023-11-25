import React, { useState, useEffect } from 'react';
export const ProductList = () => {
    const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
    useEffect(() => {
        // Define the backend API URL
        const apiUrl = 'http://localhost:5000/products';
    
        // Fetch products from the backend
        const fetchProducts = async () => {
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setProducts(data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchProducts();
      }, []);
  return (
    <div>
      <div>
        <input type="text" placeholder="Search for products" />
        <button>Search</button>
      </div>
        {error && <p>Error: {error}</p>}
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name}, {product.price}, {product.category}, {product.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

