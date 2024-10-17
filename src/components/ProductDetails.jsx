import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Breadcrumb from "./Breadcrumb";
import AddToCart from "./AddToCart";
import { useLoginContext } from "./LoginContext"; 
import Button from "./Button";
import Typography from "./Typography";
import Screen from "./Screen";


import '../styles/ProductDetails.css'; 

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const { isLoggedIn,redirectToLogin } = useLoginContext(); // Use the login context
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) return <p>Error fetching product details: {error.message}</p>;
  if (!product) return <p>Loading product details...</p>;

  const handleBuyNowClick = () => {
    if (isLoggedIn) {
    navigate(`/BuyNow/${product.id}`);
  }
  else {
    redirectToLogin(); // Redirect to login if not logged in
  }};

  return (
    
    <div className="container">
   <main>
      <Breadcrumb/>
      <Wrapper className='page'>

      <div className="product-details"> 
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        
        
      <button type="button" onClick={handleBuyNowClick}>
         BUY NOW
      </button><br/>
      <AddToCart product={product} />
      </div>
        </Wrapper>  
        </main>
      </div>
    
  );
}

export default ProductDetails;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;