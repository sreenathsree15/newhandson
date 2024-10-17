import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

import AmountButtons from "./AmountButton";
import { useCartContext } from "./cart_context";
import Button from "./Button";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  //? Local State
  const [amount, setAmount] = useState(1);

  //? Handlers
  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };


  return (
    <>
    <ButtonContainer>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Button variant='primary' onClick={() => addToCart(product, amount)}>
          Add To Cart
      </Button>
      </ButtonContainer>
    </>
  );
};

export default AddToCart;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; /* Adjust space between buttons */
  margin-top: 1rem; /* Optional: space above the buttons */
`;
