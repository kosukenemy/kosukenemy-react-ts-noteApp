import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { CreateItemsType } from '../../types'
import { db } from '../../dexie'
import { Link } from 'react-router-dom'

const MemoItems = () => {
  const [items, setItems] = useState<CreateItemsType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(!isLoading)
    db.memo.toArray().then((data: CreateItemsType[]) => {
      if ( typeof data !== "undefined" ) {
        setItems(data);
      }
    }).then(() => {
      setIsLoading(isLoading)
    });
  }, []);

  return (
    <div>
      { isLoading && "loading" }
      { items?.length === 0 && "メモはありません。" }
      { items?.map(({ id, title, description, tag, created_at, checked }: CreateItemsType) => {
        return (
          <div key={title} data-uid={id}>
            <Link to={`/${id}`}><h3>{title}</h3></Link>
            <p>{description}</p>
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