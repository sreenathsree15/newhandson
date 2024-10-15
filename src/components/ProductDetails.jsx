import React, { useState, useEffect } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')    
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setProduct(data[0]); 
        }
        setLoading(false);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container">
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Price: </strong>${product.price}</p>
        <p><strong>Category: </strong>{product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
