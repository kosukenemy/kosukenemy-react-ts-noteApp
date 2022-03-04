import { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { ItemType } from '../../types'
import { Link } from 'react-router-dom';
import { fetchAPI } from '../../api'

const MemoItems = () => {
  const [getData, setGetData] = useState<ItemType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setIsLoading(!isLoading);
    (async() => {
      setGetData( await fetchAPI() );
    })().then(() => {
      setIsLoading(isLoading);
    }).catch(err => {
      setError(err);
    })
  }, []);


  console.log(getData)

  return (
    <div>
      { isLoading && "loading" }
      { getData?.length === 0 && "メモはありません。" }
      { getData?.map(({ id, title }: ItemType) => {
        return (
          <div key={id} data-uid={id}>
            <Link to={`/${id}`}><h3>{title}</h3></Link>
          </div>
        )
      })}
    </div>
  )
}

export default MemoItems