import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
        branding: {
            main: '#EDBE00',
            dark: '#CB9C00'
        }
    },
});

export default theme;