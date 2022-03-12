import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemType } from '../types';
import { fetchAPI, addNewItem, putItem, deleteItem } from '../api';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useAsyncData = (method: MethodType, item?: ItemType, id?: any) => {
  const navigate = useNavigate();
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
            setIsSuccess(!isSuccess);
          } else setIsError(!isError);

          return res;
        })();
      },[item])
    break;

    case 'PUT':
      useEffect(() => {
        (async () => {
          if ( typeof item === "undefined" ) return false;
          console.log('PUT')

          const res = await putItem(item);

          if ( res.status === 200 ) {
            setIsSuccess(!isSuccess);
          } else setIsError(!isError);

          return res;
        })();
      },[item])
    break;

    case 'DELETE':
      useEffect(() => {
        (async () => {
          if ( id === undefined ) return false;
          const res = await deleteItem(id);

          if ( res.status === 200 ) {
            console.log("成功!")
            setIsSuccess(!isSuccess);
          } else setIsError(!isError);

          return navigate("/", { replace: true });
        })();
      },[id])
    break;
  }


  return {
    data,
    isLoading,
    isError,
    isSuccess
  }
}
