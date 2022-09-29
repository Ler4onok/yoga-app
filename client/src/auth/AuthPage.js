import React from 'react';
// mui 
import Box from '@mui/material/Box';
// components 
import {Login} from './Login';
// hooks
import {useHttp} from '../hooks/request';
import {useNavigate} from 'react-router-dom';



/**
 * A page where log in and sign in are handled
 */
export const AuthPage = () => {
    const {request} = useHttp();
    const navigate = useNavigate();

    const sharedFieldProps = {
        variant: 'outlined'
    }

    const handleSubmit = values => {
        request('api/auth/login', 'POST', {email: values.email, password: values.password}).then(response => {
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token)
                // TOASK: how to automatically push to home page after login (dependency on change isAuthenticated)
                navigate('/home')
            }
            else {
                alert('Something went wrong...');
            }
        })
    }
    return <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme => theme.palette.primary.main}}>
        <Login sharedFieldProps={sharedFieldProps} handleSubmit={handleSubmit} />
    </Box>
}