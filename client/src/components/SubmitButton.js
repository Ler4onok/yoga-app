import React from 'react';
// translation 
import {FormattedMessage} from 'react-intl';
// mui 
import Button from '@mui/material/Button';


/**
 * A button, which submits a form 
 */
export const SubmitButton = () => {
    return <Button type='submit' variant='contained' color='primary'><FormattedMessage id='submit' /></Button>;
};
