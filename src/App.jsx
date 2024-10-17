import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
 import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import About from './components/About';
import BuyNow from './components/BuyNow';
import CartItem from './components/CartItem';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import {LoginProvider} from './components/LoginContext';
import { CartProvider } from './components/cart_context';



function App() {
  return (
    <Router>
      <LoginProvider>
        <CartProvider>
      <Routes>
    <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<Products />} />
         <Route path="/about" element={<About />} />
         <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/cartitem" element={<CartItem />} />
        <Route path="/BuyNow/:id" element={<BuyNow />} />
      </Routes>
      </CartProvider>
      </LoginProvider>
    </Router>
  );
};
export default App;






