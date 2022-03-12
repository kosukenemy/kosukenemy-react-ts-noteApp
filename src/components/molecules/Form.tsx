import React, { useRef, useState } from 'react';
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import { getUniqueId } from '../../globalFunc';
import { ItemType } from '../../types';
import { addNewItem } from '../../api';
import { useAsyncData } from '../../hooks/useAsyncData';

const Form = () => {
  const uid = getUniqueId();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem: ItemType = {
      id: uid,
      title: title.current?.value,
      content: content.current?.value
    };

    const res = await addNewItem(newItem);
    if ( res.status !== 200 ) return setError(!error);
    setSuccess(!success);

    return res;
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      { error && <div>error!: 投稿できませんでした</div> }
      { success && <div>success!: 投稿しました</div> }
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
      <Button 
        text={"新規作成"}
        background={"#5c9ca5"}
        color={"#fff"}
        /
      >
    </form>
  )
}

export default Form