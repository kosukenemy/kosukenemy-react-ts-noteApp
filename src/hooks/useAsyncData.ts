import { useState, useEffect } from 'react';
import { ItemType } from '../types';
import { fetchAPI, addNewItem } from '../api';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useAsyncData = (method: MethodType, item?: ItemType) => {
  const [data, setData] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  switch(method){
    case 'GET':
      useEffect(() => {
        (async () => {
          setIsLoading(!isLoading);
          setData( await fetchAPI() );
        })()
        .then(() => {
          setIsLoading(isLoading);
          setIsSuccess(!isSuccess);
        })
        .catch((error) => {
          setIsError(error)
        });
      },[]);
    break;

    case 'POST':
      useEffect(() => {
        (async () => {
          if ( typeof item === "undefined" ) return false;

          const res = await addNewItem(item);

          if ( res.status === 200 ) {
            setIsSuccess(!isSuccess)

          } else setIsError(!isError);

          return res;
        })();
      },[item])
    break;

    case 'PUT':
      console.log('PUT')
    break;

    case 'DELETE':
      console.log('DELETE')
    break;
  }


  return {
    data,
    isLoading,
    isError,
    isSuccess
  }
}
