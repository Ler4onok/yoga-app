import React from 'react';
// translation 
import {FormattedMessage} from 'react-intl';
// form 
import {useFormik} from 'formik';
// mui
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import {SubmitButton} from '../components/SubmitButton';
import {CancelButton} from '../components/CancelButton';


/**
 *  Login form to authorize a user
 */
export const Login = ({sharedFieldProps}) => {
    // a simple form initialization
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    // TODO: add component box with positioning props
    return <Card sx={{p: theme => theme.spacing(2)}}>
        <Box component='form' onSubmit={formik.handleSubmit} sx={{display: 'flex', flexDirection: 'column', gap: theme => theme.spacing(2)}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: theme => theme.spacing(2)}}>
                <Typography variant='h4'><FormattedMessage id='auth' /></Typography>
                <TextField label='Email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} {...sharedFieldProps} />
                <TextField label='Password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} {...sharedFieldProps} />
            </Box>
            <Box sx={{display: 'flex', gap: theme => theme.spacing(1), alignItems: 'center', justifyContent: 'flex-end', }}>
                <CancelButton />
                <SubmitButton />
            </Box>
        </Box>
    </Card>
} 