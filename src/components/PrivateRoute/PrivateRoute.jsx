// src/components/PrivateRoute/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
const { user, loading } = useAuth();

if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Loading user authentication...</div>;
}

  // If user is not logged in, redirect to the login page
    return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;