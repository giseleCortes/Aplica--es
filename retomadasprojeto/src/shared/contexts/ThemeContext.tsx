import React, { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from "./../themes";
import { Box }  from '@mui/system';


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;

}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme;

        return DarkTheme
    }, [themeName]);



    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
