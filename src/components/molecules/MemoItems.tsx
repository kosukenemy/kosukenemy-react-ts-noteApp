import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { CreateItemsType } from '../../types'
import { db } from '../../dexie'

const MemoItems = () => {
  const [items, setItems] = useState<CreateItemsType[]>()

  useEffect(() => {
    db.memo.toArray().then((item: CreateItemsType[]) => {
      if ( typeof item !== "undefined" ) {
        setItems(item);
      }
    })
  }, []);

  return (
    <div>
      {items?.map(({ id, title, tag, created_at, checked }: CreateItemsType) => {
        return (
          <div key={title} data-uid={id}>
            <h3>{title}</h3>
            <span>{tag}</span>
            <span>{checked ? "お気に入り済み" : ""}</span>
            <time>{created_at}</time>
          </div>
        )
      })}
    </div>
  )
}

export default MemoItems