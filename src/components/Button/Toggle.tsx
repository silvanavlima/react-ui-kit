// Toggle.js
import React from 'react';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';

import { ReactComponent as MoonIcon } from './../../assets/icons/apagada.svg';
import { ReactComponent as SunIcon } from './../../assets/icons/acesa.svg';

import { ThemeType } from '../../models/enums/ThemeType';

// eslint-disable-next-line react/prop-types
const Toggle: React.FC<any> = ({ theme, toggleTheme }) => {
    // const isLight = theme === ThemeType.light;
    return (
        <ToggleContainer onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

const ToggleContainer = styled.button<any>`
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
    svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;

        // sun icon
        &:first-child {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            transform: ${({ lightTheme }) =>
                lightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        // moon icon
        &:nth-child(2) {
            transform: ${({ lightTheme }) =>
                lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`;

export default Toggle;
