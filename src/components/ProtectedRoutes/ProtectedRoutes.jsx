import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      alert("Login required!!!");
    }
  }, [user]);

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
