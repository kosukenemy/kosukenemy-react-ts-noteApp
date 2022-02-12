import React, { useState } from 'react'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import { CreateNewMemo } from '../../appConfig'
import Dexie from "dexie";


const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerInput = (
    event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {    
    const formType = event.currentTarget.type;
    const inputValue = event.currentTarget.value;

    if ( formType === "text" ) return setTitle(inputValue);
    if ( formType === "textarea" ) return setDescription(inputValue);
  }
  // onBlur={(event) => handlerInput(event)
  console.log(title, description)

  return (
    <div>
      <Button />
      <TextField 
        titleName={CreateNewMemo.titleName}
        type={"text"}
        onBlur={(event) => handlerInput(event)}
      />
      <TextField 
        titleName={CreateNewMemo.descriptionName}
        type={"textarea"}
        onBlur={(event) => handlerInput(event)}
      />
    </div>
  )
}

export default CreateItem