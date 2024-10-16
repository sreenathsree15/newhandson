import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import '../styles/ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <p>Error fetching product details: {error.message}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="container"> 
      <div className="product-details"> 
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button type="button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDetails;
