import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import Typography from "./Typography"
import Button from "./Button";

const CheckoutPage = () => {
    const navigate = useNavigate();

  const handleBackToShopClick = () => {
    navigate('/');}
  return (
    <Wrapper className='page-w-b'>
      <div>
        <Typography.H2>Checkout Successfully</Typography.H2>
        <h1>ThankYou For Shopping With Us</h1>
        <br/>
        <br/>
        <br/>
        <Button variant='secondary' onClick={handleBackToShopClick}>
        Back To Shopping</Button>
        <br/><br/><br/><br/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  background: #ffcccb;
  h2 {
    margin-bottom: 2rem;
  }
`;
export default CheckoutPage;