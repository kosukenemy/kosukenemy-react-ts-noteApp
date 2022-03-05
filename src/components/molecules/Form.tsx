import React, { useRef, useState } from 'react'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import { CreateNewMemo } from '../../appConfig'
import { ButtonTypes } from '../../appConfig'
import { getUniqueId } from '../../globalFunc';
import { ItemType } from '../../types';
import { addNewItem } from '../../api';

const Form = () => {
  const uid = getUniqueId();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem: ItemType = {
      id: uid,
      title: title.current?.value,
      content: content.current?.value
    };
    addNewItem(newItem);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      { error }
      <TextField 
        type={"text"} 
        name={"title"} 
        title={title} 
        displayName={"タイトル"}
      />
      <TextField 
        type={"textarea"} 
        name={"content"} 
        title={content} 
        displayName={"本文"}
      />
      <Button text={"新規作成"} />
    </form>
  )
}

export default Form