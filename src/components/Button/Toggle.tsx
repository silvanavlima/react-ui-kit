// Toggle.js
import React from 'react';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';

import { ReactComponent as MoonIcon } from './../../assets/icons/apagada.svg';
import { ReactComponent as SunIcon } from './../../assets/icons/acesa.svg';

const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;
`;

interface Props {
    theme: any;
    toggleTheme: any;
}

const Toggle: React.FC<Props> = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return <ToggleContainer onClick={toggleTheme}></ToggleContainer>;
};

export default Toggle;
