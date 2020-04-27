import React, { ReactNode } from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { lighten } from 'polished';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    emphasis?: 'contained' | 'outlined' | 'text';
    fluid?: boolean;
    onClick: Function;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    lightTheme?: string;
    css?: CSSObject;
}

const PureButton: React.FunctionComponent<ButtonProps> = ({
    children,
    className,
    color,
    disabled,
    onClick,
    type,
}) => (
    <button
        className={className}
        color={color}
        disabled={disabled}
        onClick={() => {
            if (disabled === false) onClick();
        }}
        type={type}
    >
        {children}
    </button>
);

const Button = styled(PureButton)`
  --primary-color:${({ theme }) => theme.colors?.main};
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  flex: initial;
  font-family:${({ theme }) => theme.fontFamily};
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.045em;
  margin: 0;
  min-height: 40px;
  outline: none;
  overflow: hidden;
  padding: 0 10px;
  position: relative;
  text-align: center;
  transition: all .2s cubic-bezier(.06,.67,.37,.99);
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  ${(props) =>
      props.fluid === true
          ? css`
                flex: 1;
                width: 100%;
            `
          : ''}
  ${({ size, theme }) => {
      switch (size) {
          case 'sm':
              return css`
                  font-size: 85%;
                  line-height: 0.9em;
                  min-height: 30px;
                  height: 30px;
                  min-width: 60px;
              `;
          case 'lg':
              return css`
                  font-size: 115%;
                  height: 56px;
                  min-height: 56px;
                  min-width: 156px;
              `;
          case 'md':
          default:
              return css`
                  box-shadow: none;
                  height: 40px;
                  min-width: 120px;
              `;
      }
  }}
  ${({ theme }) =>
      theme.colors?.main === 'primary'
          ? css`
                --primary-color: ${({ theme }) => theme.colors?.main};
                --primary-color-opacity: $
                    ${({ theme }) => theme.colors?.secondary};
                :hover {
                    background-color: ${lighten(0.05, theme.colors.main)};
                }
            `
          : ''}
          ${({ theme }) =>
              theme.colors?.secondary === 'secondary'
                  ? css`
                        --primary-color: 'blue';
                        --primary-color-opacity: 'red';
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        font-weight: 300;
                        :hover {
                            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
                        }
                    `
                  : ''}
  ${({ color, emphasis, theme }) => {
      switch (emphasis) {
          case 'text':
              return css`
          color: ;
          padding: 0 5px;
          &:hover {
            background-color: ${lighten(0.05, '#ebab4b')};

            box-shadow: none;
          },
        `;
          case 'outlined':
              return css`
          border: 1px solid #EBAB4B;
          color: var(--primary-color);
          &:hover {
            background-color: ${lighten(0.05, '#ebab4b')};
            box-shadow: none;
          },
        `;
          case 'contained':
          default:
              return css`
                  background-color: #ebab4b;
                  color: white;
              `;
      }
  }}
`;

Button.defaultProps = {
    disabled: false,
    emphasis: 'contained',
    fluid: false,
    onClick: () => ({}),
    size: 'md',
    type: 'button',
};

export default Button;
