import React from 'react';
// navigation
import {Navigate} from 'react-router-dom';
// store
import {AppStore} from '../store/store';


/**
 * Wrapper for route to check if user is authorized
 */
export const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('token');
    
    // reditect to login page if user is not authorized
    return !token ? <Navigate to='/login' replace /> : children
};

// import React, {useEffect} from 'react';
// // navigation
// import {Navigate, useNavigate} from 'react-router-dom';
// // hooks
// import {useAuth} from '../hooks/auth';


// /**
//  * Wrapper for route to check if user is authorized
//  */
// export const ProtectedRoute = ({children}) => {
//     const {token} = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         !token && navigate('/login')
//     }, [token])

//     return children;

// };
