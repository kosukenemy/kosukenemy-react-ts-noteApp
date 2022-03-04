import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemType } from '../../types';
import { fetchAPI } from '../../api'

const DetailPage = () => {
  let { id } = useParams();
  const [item, setItem] = useState<ItemType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(!isLoading);
    (async() => {
      const fetchData = await fetchAPI();
      const itemByMatchId = fetchData.find((data:ItemType) => data.id === id );
      setItem(itemByMatchId);
    })().then(() => {
      setIsLoading(isLoading)
    });
  },[]);

  console.log(item)

  return (
    <div>
      { isLoading ? "loading": 
        <ul>
          <li>{item?.title}</li>
          <li>{item?.content}</li>
        </ul>
      }
    </div>
    
  )
}

export default DetailPage