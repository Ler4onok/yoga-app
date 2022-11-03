import React from 'react';
// router
import {Routes, Route, Navigate} from 'react-router-dom';
// components
import {ProtectedRoute} from './auth/ProtectedRoute';
// pages
import {AuthPage} from './auth/AuthPage';
import {HomePage} from './pages/HomePage';
import {AboutUsPage} from './pages/AboutUsPage';


/**
 * Routes handling 
 */
// todo: add not found
export const useRoutes = () => {
    return <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/' exact element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path='/about-us' exact element={<ProtectedRoute><AboutUsPage /></ProtectedRoute>} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>;
};
