import React from 'react';
// localization
import {FormattedMessage} from 'react-intl';
// mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// todo: redo paddings in sections
// todo: change image render
export const HomePage = () => {
    const sharedBoxStyles = {
        px: 64, py: 8
    };

    const imageLink = 'https://images.unsplash.com/photo-1584936964770-7d9a3cd21143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';

    return <Box>
        <Box
            sx={{
                height: '800px',
                backgroundImage: `url(${imageLink})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover'
            }} />
        <Box sx={{...sharedBoxStyles, color: 'gray.main'}}>
            <Typography variant='h4' sx={{letterSpacing: 3, mb: 2, textAlign: 'center'}}><FormattedMessage id='main.welcome.title' /></Typography>
            <Typography variant='p' sx={{textAlign: 'center'}}><FormattedMessage id='main.welcome.text' /></Typography>
        </Box>
    </Box>;
};
