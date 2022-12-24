import React from 'react';
// localization
import {FormattedMessage} from 'react-intl';
// navigation
import {Link} from '../ui/Link';
// mui
import Box from '@mui/material/Box';


// todo: logout icon
export const Header = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    // controls header visibility
    const isAuthorized = localStorage.getItem('token');

    // shared styles for links and link container
    const styles = {
        link: {
            textDecoration: 'none',
            color: 'gray.main',
            fontWeight: 300,
            fontSize: 16,
            letterSpacing: 2
        },
        linkContainer: {
            display: {xs: 'none', sm: 'flex'},
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 2
        }
    };
  
    return isAuthorized && <Box sx={{px: 4, py: 2, display: 'grid', alignItems: 'center', gridTemplateColumns: '1fr 1fr 1fr', height: '100px'}}>
        <Box sx={styles.linkContainer}>
            <Link sx={styles.link} to='/events'><FormattedMessage id='header.events' /></Link>
            <Link sx={styles.link} to='/calendar'><FormattedMessage id='header.calendar' /></Link>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link sx={{...styles.link, fontSize: 32, fontWeight: 100}} to='/'><FormattedMessage id='header.tempLogo' /></Link>
        </Box>
        <Box sx={{...styles.linkContainer, justifyContent: 'flex-end'}}>
            <Link sx={styles.link} to='/teachers'><FormattedMessage id='header.teachers' /></Link>
            <Link sx={styles.link} to='/about-us'><FormattedMessage id='header.aboutUs' /></Link>
            <Link sx={styles.link} to='/profile'><FormattedMessage id='header.profile' /></Link>
            <Link sx={styles.link} to='/' onClick={logout}>Logout</Link>
        </Box>
    </Box>;
};
