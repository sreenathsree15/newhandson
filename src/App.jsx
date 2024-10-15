import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
 import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/" element={<Products />} />
         <Route path="/about" element={<About />} />
            <Route path="/" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};
export default App;






