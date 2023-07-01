

import { createTheme } from '@mui/material';
import { blue, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: blue [700],
            dark: blue [800],
            light: blue [500],
            contrastText: '#ffffff',
        },

        secondary:{
            main: indigo [500],
            dark: indigo [400],
            light: indigo [300],
            contrastText:'#ffffff',
        },

        background:{
            default:'#f7f6f3',
            paper:'#ffffff',

        }

        }
    
});
