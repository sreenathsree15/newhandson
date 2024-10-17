import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import '../styles/login.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    alert('Logged in to your account successfully!');
    navigate('/')
  };

  return (
    <div className="login-form-container">
      <form className='login-form'>
        <h2 style={{fontWeight:'bolder'}}>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleSignIn}>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
      
      <div className="link-container">

      </div>
    </div>
  );
};

export default SignIn;