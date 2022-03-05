import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ItemType, LocationType } from '../../types';
import { RefObject } from '../../types';
import { putItem } from '../../api';


const DetailPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const location: LocationType = useLocation();
  const { items } = location.state;
  const [item, setItem] = useState<ItemType>();
  const [isEdit, setIsEdit] = useState(false);

  const editTitle = useRef<HTMLInputElement>(null);
  const editContent = useRef<HTMLInputElement>(null);

  const handleEdit = () => setIsEdit(!isEdit);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

    const editItem:ItemType = {
      id: item?.id,
      title: editTitle?.current?.value,
      content: editContent?.current?.value,
    };
    await putItem(editItem);
    navigate("/", { replace: true });
  }

  useEffect(() => {
    (async() => {
      setItem(
        items.find((data:ItemType) => data.id === id )
      );
    })();
  },[]);

  return (
    <div>
      { isEdit ?
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="text" defaultValue={item?.title} ref={editTitle}/>
          <input type="text" defaultValue={item?.content} ref={editContent}/>
          <button>更新</button>
        </form>
        :
        <div>
          <ul>
            <li>{item?.title}</li>
            <li>{item?.content}</li>
          </ul>
          <button onClick={handleEdit}>編集</button>
        </div>
      }

    </div>
    
  )
}

export default DetailPage