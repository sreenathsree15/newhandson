
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { truncate } from "./Helpers";

import AmountButtons from "./AmountButton";
import Typography from "./Typography";
import Icons from "./Icon"; 

import Screen from "./Screen";

import { useCartContext } from "./cart_context";

const CartItem = ({ title, price, amount, id, image }) => {
  const { toggleAmount, removeItem } = useCartContext();
  //? Handlers
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className='item__img'>
        <img src={image} alt={title} />
      </div>
      <div className='item__info'>
        <Link to={`/products/${id}`} title={title}>
          {truncate(title, 20)}
        </Link>
        <Typography.P>
          ${price} &#9747; {amount} :
          <br />
          <span>${(price * amount).toFixed(2)}</span>
        </Typography.P>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <button
        className={amount < 2 ? "item__delete active" : "item__delete "}
        onClick={() => removeItem(id)}
      >
        <Icons.FaTrashStyled />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 0.5rem;
  background: #add8e6;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  
  ${Screen.sm`
    gap: 2rem;
    `}
  ${Screen.md`
    gap: 3rem;
    `}

  .item__img {
    display: none;
    ${Screen.md`
    display: inline;
    `}
    img {
      max-width: 8rem;
    }
  }

  .item__info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    span {
      color: var(--red-color-1);
    }

    a {
      font-size: var(--fs-400);
    }
  }

  .item__delete {
    padding: 0.6rem;
    transition: var(--transition);
    transform: scale(1);
  }

  .active {
    transform: scale(1.3);
  }
`;

export default CartItem;
