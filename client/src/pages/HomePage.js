import React from 'react';
// mui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {AppStore} from '../store/store';


export const HomePage = () => {

    const logout = () => {
        AppStore.update(store => {
            store.token = ''
        });
        localStorage.removeItem('token');
        window.location.reload();
    };

    return <Box>
        <Button onClick={() => logout()}>
            Logout
        </Button>
    </Box>
}