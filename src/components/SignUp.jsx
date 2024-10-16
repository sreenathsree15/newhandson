import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Create New Account</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>

      <div className="link-container">
      </div>
    </div>
  );
};

export default SignUp;
