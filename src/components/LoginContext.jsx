// LoginContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const redirectToLogin = () => {
    alert("Please login to continue shopping");
    navigate("/signin");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, redirectToLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
