import React from 'react'

type ButtonType = {
  text:string;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ text, onClick }: ButtonType) => {
  return (
    <button onClick={onClick}>{ text }</button>
  )
}

export default Button