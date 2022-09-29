import React from 'react';
// css
import './App.css';
// navigation
import {BrowserRouter as Router} from "react-router-dom";
// routes
import {useRoutes} from './routes';
// theme
import theme from './theme';
// translations
import {IntlProvider} from 'react-intl';
import messages from './en.json';
// mui
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {useAuth} from './hooks/auth';
import {AuthContext} from './context/AuthContext';


/**
 * Application root
 */
function App() {
    const {login, logout, token} = useAuth();
    const isAuthenticated = !!token;
    console.log(isAuthenticated)
    const routes = useRoutes(isAuthenticated);

    return (
        <IntlProvider messages={messages} locale='en'>
            <ThemeProvider theme={theme}>
                <AuthContext.Provider value={{
                    login, logout, token, isAuthenticated
                }}>
                    <Router>
                        {routes}
                    </Router>
                </AuthContext.Provider>
            </ThemeProvider>
        </IntlProvider>
    );
}

export default App;
