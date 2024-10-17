import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cart_reducer as reducer } from "./cart_reducer";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
const CLEAR_CART = "CLEAR_CART";
const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";
const CHECKOUT = "CHECKOUT";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_price: 0,
  total_items: 0,
  isCheckout: false,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  //? Handlers
  const addToCart = (product, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { product, amount } });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM, payload: { id, value } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const checkout = () => {
    dispatch({ type: CHECKOUT });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};