import React from 'react';
// mui 
import Box from '@mui/material/Box';
// components 
import {Login} from './Login';


/**
 * A page where log in and sign in are handled
 */
export const AuthPage = () => {
    const sharedFieldProps = {
        variant: 'outlined'
    }
    return <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme => theme.palette.primary.main}}>
        <Login sharedFieldProps={sharedFieldProps}/>
    </Box>
}