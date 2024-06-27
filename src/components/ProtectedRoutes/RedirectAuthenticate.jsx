import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectAuthenticate = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? <Navigate to="/home" replace /> : children;
};

export default RedirectAuthenticate;
