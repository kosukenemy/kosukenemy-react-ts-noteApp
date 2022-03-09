import React from 'react';
import styled from 'styled-components';

type ButtonType = {
  text:string;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
  background: string;
  color: string;
}

const Button = ({ text, onClick, background, color }: ButtonType) => {
  return (
    <StyledButton theme={{
      background,
      color
    }} onClick={onClick}>{ text }</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  width: 89px;
  height: 34px;
  border-radius: 3px;
  background: ${({theme}) => theme.background};
  border: none;
  outline: none;
  color: ${({theme}) => theme.color};
  font-weight: bold;
  letter-spacing: 0.03em;
  margin: 3px;
  cursor: pointer;
`
;