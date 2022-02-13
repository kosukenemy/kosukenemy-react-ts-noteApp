import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { db } from '../../dexie';
import { CreateItemsType } from '../../types'

const DetailPage = () => {
  let { id } = useParams();
  const [item, setItem] = useState<CreateItemsType>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(!isLoading);
    db.memo.where("id").equals(id).each((item: any) => {
      setItem(item);
    }).then(() => {
      setIsLoading(isLoading);
    })
  },[]);

  return (
    <div>
      { isLoading && "loading" }
        <h2>詳細ページ</h2>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>{item.tag}</span>
        <span>{item.checked ? "お気に入り済み" : ""}</span>
        <time>{item.created_at}</time>
    </div>
  )
}

export default DetailPage