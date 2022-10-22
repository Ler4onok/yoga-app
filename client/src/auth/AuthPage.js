import React from 'react';
// mui 
import Box from '@mui/material/Box';
// components 
import {Login} from './Login';
// hooks
import {useHttp} from '../hooks/request';
import {useNavigate} from 'react-router-dom';
// store
import {AppStore} from '../store/store';



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
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate('/')
            }
            else {
                alert('Something went wrong...');
            }
        })
    }
    return <Box sx={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        // todo: change
        backgroundImage: 'url(https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
    }}>
        <Login sharedFieldProps={sharedFieldProps} handleSubmit={handleSubmit} />
    </Box>
}