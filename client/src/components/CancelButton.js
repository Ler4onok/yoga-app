import React from 'react';
// translation 
import {FormattedMessage} from 'react-intl';
// mui 
import Button from '@mui/material/Button';


/**
 * A button to cancel the action 
 */
export const CancelButton = () => {
    return <Button color='primary'><FormattedMessage id='cancel' /></Button>;
}
