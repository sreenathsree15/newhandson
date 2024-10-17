import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Typography from './Typography';
import AmountButtons from './AmountButton'; // Assuming you want to include this
import { useLoginContext } from './LoginContext'; // Use the login context
import AddToCart from './AddToCart'; // Add to Cart component

const BuyNowPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, redirectToLogin } = useLoginContext();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1); // For amount selection

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Typography.H2>Loading...</Typography.H2>;
  }

  if (error) {
    return (
      <div>
        <Typography.H2>There was an error loading the product!</Typography.H2>
        <Button variant='secondary' onClick={() => navigate('/')}>
          Back to Products
        </Button>
      </div>
    );
  }

  const { title, price, image, description } = product;

  const handleBuyNowClick = () => {
    if (isLoggedIn) {
      navigate(`/checkout`, { state: { product, amount } }); // Pass product and amount
    } else {
      redirectToLogin(); // Redirect to login if not logged in
    }
  };

  return (
    <Wrapper>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <Typography.P>{description}</Typography.P>
      <Typography.H2>Price: ${price}</Typography.H2>
      <AmountButtons amount={amount} setAmount={setAmount} />
      
      <ButtonContainer>
        <Button variant='secondary' onClick={handleBuyNowClick}>
          BUY NOW
        </Button>
        <AddToCart product={product} />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  img {
    max-width: 300px;
    margin: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; /* Adjust space between buttons */
  margin-top: 1rem; /* Optional: space above the buttons */
`;

export default BuyNowPage;
