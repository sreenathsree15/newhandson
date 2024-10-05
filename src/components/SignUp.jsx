import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';


const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("Account created successfully!"); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create New Account</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="link-container">
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
