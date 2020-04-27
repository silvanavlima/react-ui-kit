import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    backgrounds: {
        main: 'aqua',
        secondary: 'black',
    },

    fontFamily: 'Work Sans", sans-serif',
    fontSize: {
        h1: '14px',
        h2: '16px',
    },
    colors: {
        main: 'red',
        secondary: 'blue',
    },
};

const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    backgrounds: {
        main: '#fff',
        secondary: 'red',
    },
    fontFamily: 'Work Sans", sans-serif',
    fontSize: {
        h1: '14px',
        h2: '16px',
    },
    colors: {
        main: 'aqua',
        secondary: 'black',
    },
};

export { lightTheme, darkTheme };
