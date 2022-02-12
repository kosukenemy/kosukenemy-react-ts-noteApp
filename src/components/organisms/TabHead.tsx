import React, { useState } from 'react'
import styled from 'styled-components'
import { TabHeadConfig } from '../../appConfig'

const TabHead = () => {
  let [isValid, setIsValid] = useState(0);
  
  const handlerTabToggle = ( index:number ) => setIsValid(index);

  return (
    <StyledTabHead>
      {TabHeadConfig.map((tab, index) => 
        <StyleTabMenu 
          key={tab.title} 
          data-tab={tab.flag}
          onClick={() => handlerTabToggle(index)}
          className={ index === isValid ? "active" : "passive"}
        >
          {tab.title}
        </StyleTabMenu>
      )}


    </StyledTabHead>
  )
}
export default TabHead

const StyledTabHead = styled.div`
  display: flex;
`;

const StyleTabMenu = styled.div`
  cursor: pointer;

  &.active {
    border-bottom: solid 4px #5C9CA5;
  }
`;