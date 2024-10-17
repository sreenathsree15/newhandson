import React from "react";
import styled from "styled-components";

import Screen from "./Screen";
import Button from "./Button";
import Typography from "./Typography";

import { useCartContext } from "./cart_context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_items, total_price, checkout } = useCartContext();
  return (
    <Wrapper>
      <div>
        <Typography.H3 className='total__items'>
          Total Items : <span>{total_items}</span>
        </Typography.H3>
        <br />
        <Typography.H4 className='total__price'>
          Total Price : <span>${total_price.toFixed(2)}</span>
        </Typography.H4>
      </div>
      <hr />
      <Button variant='primary'>
      <Link
        to='/checkout'
        type='button'
        className='total__btn '
        onClick={checkout}
      >
        CHECKOUT
      </Link></Button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 0.2rem solid var(--green-color-1);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  background: #98ff98;

  ${Screen.lg`
    align-self: flex-start;
    width: 80%; /* Increase width for large screens */
    height: 400px; /* Increase height */
    font-size: 1.5rem; /* Increase font size */
  `}


  .total__items {
    span {
      color: var(--blue-color-1);
      display: inline-block;
      text-align: center;
      width: 12rem;
      font-size: var(--fs-600);
    }
  }

  .total__price {
    span {
      color: var(--red-color-1);
      display: inline-block;
      text-align: center;
      font-size: var(--fs-600);
      width: 12rem;
    }
  }

  hr {
    border-bottom: 0.2rem solid var(--red-color-1);
    margin: 1.5rem 0;
  }

  .total__btn {
    background: var(--green-color-1);
    width: 100%;
    padding: 0.5rem;
    color: var(--white-color);
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid var(--green-color-1);
    transition: var(--transition);
    &:hover {
      background: transparent;
      color: var(--red-color-1);
    }
  }
`;

export default CartTotals;