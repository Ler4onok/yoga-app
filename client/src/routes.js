import React from 'react';
// router
import {Routes, Route, Navigate} from 'react-router-dom';
// pages
import {AuthPage} from './auth/AuthPage';
import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';


/**
 * Routes handling 
 */
export const useRoutes = isAuthenticated => {
    return <Routes>
        {!isAuthenticated && <Route path='/' element={<AuthPage />} />}
        <Route path='/' exact element={<HomePage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
}