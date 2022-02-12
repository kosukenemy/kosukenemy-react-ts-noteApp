import React, { useState } from 'react'
import styled from 'styled-components'
import { TabHeadConfig } from '../../appConfig'
import TabContent from '../organisms/TabContent'

const TabHead = () => {
  let [tabIndex, setTabIndex] = useState(0);
  
  const handlerTabToggle = ( index:number ) => setTabIndex(index);

  return (
    <>
    <StyledTabHead>
      {TabHeadConfig.map((tab, index) => 
        <StyleTabMenu 
          key={tab.title} 
          data-tab={index === tabIndex ? "true" : "false"}
          onClick={() => handlerTabToggle(index)}
          className={index === tabIndex ? "isValid" : ""}
        >
          {tab.title}
        </StyleTabMenu>
      )}
    </StyledTabHead>
    <TabContent tabIndex={tabIndex}/>
    </>
  )
}
export default TabHead

const StyledTabHead = styled.div`
  display: flex;
`;

const StyleTabMenu = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  color: #707070;

  &.isValid {
    border-bottom: solid 4px #5C9CA5;
  }
`;