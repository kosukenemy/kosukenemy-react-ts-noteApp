import React, { useState } from 'react'

type TextFieldType = {
  type: "text" | "textarea" 
  titleName: string;
  onBlur?: (event:React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => void 
}

const TextField = ({ type, titleName, onBlur }: TextFieldType) => {
  return (
    <label>
      { titleName }
      { type === "text" && <input onBlur={onBlur} type="text" /> }
      { type === "textarea" && <textarea onBlur={onBlur}></textarea> }
    </label>
  )
}

export default TextField