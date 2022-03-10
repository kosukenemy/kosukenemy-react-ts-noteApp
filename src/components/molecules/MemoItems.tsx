import { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { ItemType } from '../../types'
import { Link } from 'react-router-dom';
import { fetchAPI } from '../../api';
import Button from '../atoms/Button';
import Loader from '../atoms/Loader';

const MemoItems = () => {
  const [getData, setGetData] = useState<ItemType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    setIsLoading(!isLoading);
    (async() => {
      return setGetData( await fetchAPI() );
    })().then(() => {
      setIsLoading(isLoading);
    }).catch(err => {
      setError(err);
    })
  }, []);

  return (
    <StyleListWrapper>
      { isLoading && <Loader /> }
      { getData?.length === 0 && "メモはありません。" }
      { getData?.map(({ id, title }: ItemType, index) => {
        return (
          <Link key={index} style={{ textDecoration: 'none' }} to={`/${id}`} state={{ items: getData }}>
            <StyledList>
              <StyledTitle>{title}</StyledTitle>
              <Button 
                text={"詳細"}
                background={"#5c9ca5"}
                color={"#fff"}
                />
            </StyledList>
          </Link>
        )
      })}
    </StyleListWrapper>
  )
}

export default MemoItems

const StyleListWrapper = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style:none;
  padding-left:1.5em;

`;

const StyledList = styled.li`
  border-bottom:dotted 1px #555;
  margin:0.5em 0;
  padding:0.5em 0 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-of-type(1){
    margin-top:0;
  }
  &:nth-last-of-type(1){
    margin-bottom:0;
  }
`;

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #707070;
  text-decoration: none;
`;