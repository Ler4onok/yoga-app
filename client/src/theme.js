import {createTheme} from '@mui/material/styles';


export const theme = createTheme({
    typography: {
        p: {
            letterSpacing: 3
        },
        h4: {
            fontWeight: 200,
            fontSize: 32
        }
    },
    palette: {
        primary: {
            main: '#d0d4ce'
        },
        gray: {
            main: '#64676E' 
        }
    }
});
