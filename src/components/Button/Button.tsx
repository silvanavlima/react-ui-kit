import React, { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

interface ButtonProps {
    bg?: string;
    children?: React.ReactNode;
    lightTheme?: any;
}

const Button: React.FC<ButtonProps> = ({ bg, children, ...props }) => {
    return <button style={{ backgroundColor: bg }}>{children}</button>;
};

export default Button;
