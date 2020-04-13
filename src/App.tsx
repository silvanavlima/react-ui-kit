import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './global';
import Toggle from './components/Button/Toggle';
import { useDarkMode } from 'theme/useDarkMode';

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
                <h1>
                    React UI Kit{' '}
                    {theme === 'light' ? 'light tema' : 'dark tema'}!
                </h1>
            </>
        </ThemeProvider>
    );
}

export default App;
