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


/**
 * Application root
 */
function App() {
    const routes = useRoutes();

    return (
        <IntlProvider messages={messages} locale='en'>
            <ThemeProvider theme={theme}>
                    <Router>
                        {routes}
                    </Router>
            </ThemeProvider>
        </IntlProvider>
    );
}

export default App;
