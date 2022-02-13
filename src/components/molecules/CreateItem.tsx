import React, { useState } from 'react'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import { CreateNewMemo } from '../../appConfig'
import { ButtonTypes } from '../../appConfig'
import { getUniqueId } from '../../globalFunc'
import { db, bulkPutItem } from '../../dexie'
import dayjs from 'dayjs'

dayjs.locale("ja");

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const uid = getUniqueId();
  const date = dayjs().format("YYYY/M/D");

  const handlerInput = (
    event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {    
    const formType = event.currentTarget.type;
    const inputValue = event.currentTarget.value;

    if ( formType === "text" ) return setTitle(inputValue);
    if ( formType === "textarea" ) return setDescription(inputValue);
  }


  const handlerClick = () => {
    if ( !title.trim() ) return console.log('タイトルを入力してください')
    console.log(title, description)

    bulkPutItem({
        id: uid,
        title: title,
        description: description,
        tag: "",
        created_at: date,
        checked: 0
    });
  }
  

  return (
    <div>
      <Button 
        text={ButtonTypes.create}
        onClick={handlerClick}
      />
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