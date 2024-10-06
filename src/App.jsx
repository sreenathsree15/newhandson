import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
         <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
};




export default App;





