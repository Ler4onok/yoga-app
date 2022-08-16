import React from 'react';
// router
import {Routes, Route} from 'react-router-dom';
// pages
import {AuthPage} from './auth/AuthPage';
import {HomePage} from './pages/HomePage';
import {NotFoundPage} from './pages/NotFoundPage';


/**
 * Routes handling 
 */
export const useRoutes = isAuthenticated => {
    return <Routes>
        {isAuthenticated
            ?
            <Route path='/' exact element={<HomePage />} />
            :
            <Route path='/auth' element={<AuthPage />} />
        }
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
}