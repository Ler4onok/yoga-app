import React from 'react';
// router
import {Link as RouterLink} from 'react-router-dom';
// mui
import MuiLink from '@mui/material/Link';


/**
 * Extends mui link to work with react-router
 */
export const Link = React.forwardRef((props, ref) => {
    const {to, href = '#', onClick, ...rest_of_props} = props;

    return <MuiLink
        ref={ref} component={to ? RouterLink : undefined}
        to={to} onClick={onClick} href={href}
        // external link opens in new tab with secure no referrer
        {...(!to && !onClick ? {target: '_blank', rel: 'noreferrer'} : {})}
        {...rest_of_props}
    />;
});
