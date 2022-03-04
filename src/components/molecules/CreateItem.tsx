import React, { useRef } from 'react'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import { CreateNewMemo } from '../../appConfig'
import { ButtonTypes } from '../../appConfig'
import { getUniqueId } from '../../globalFunc';
import { ItemType } from '../../types';
import { addNewItem } from '../../api'

const CreateItem = () => {
  const uid = getUniqueId();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  

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
      <label htmlFor="title">title</label>
      <input id="title" type="text" ref={title} />
      <label htmlFor="content">content</label>
      <input id="content" type="text" ref={content} />
      <button>新規作成</button>
    </form>
  )
}

export default CreateItem