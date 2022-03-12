import { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { ItemType } from '../../types'
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Loader from '../atoms/Loader';
import { useAsyncData } from '../../hooks/useAsyncData';

const MemoItems = () => {
  const { data, isLoading, isError } = useAsyncData("GET");

  return (
    <StyleListWrapper>
      { isError && <div>error</div> }
      { isLoading && <Loader /> }
      { !isLoading && data?.length === 0 && "メモはありません。" }
      { data?.map(({ id, title }: ItemType, index) => {
        return (
          <Link key={index} style={{ textDecoration: 'none' }} to={`/${id}`} state={{ items: data }}>
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