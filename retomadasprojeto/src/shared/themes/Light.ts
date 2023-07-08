

import { createTheme } from '@mui/material';
import { lightBlue, indigo } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: lightBlue [700],
            dark: lightBlue [800],
            light: lightBlue [500],
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
        },
    },
         typography:{
            allVariants:{
                color: 'black',
            }

        }
    
});
