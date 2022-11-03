import React from 'react';
// navigation
import {Navigate} from 'react-router-dom';


/**
 * Wrapper for route to check if user is authorized
 */
export const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('token');
    
    // reditect to login page if user is not authorized
    return !token ? <Navigate to='/login' replace /> : children;
};
