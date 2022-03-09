import React, { useState } from 'react';
import styled from 'styled-components';
import { TabHeadConfig } from '../../appConfig'
import TabContent from '../organisms/TabContent'
import { useNavigate } from 'react-router-dom';

const TabHead = () => {
  let [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  
  const handlerTabToggle = ( index:number ) => {
    setTabIndex(index);
    if (index === 0) return navigate('/')
    if (index === 1) return navigate('/new')
  }

  return (
    <>
    <StyledTabHead>
      {TabHeadConfig.map((tab, index) => 
        <StyleTabMenu 
          key={tab.title}
          data-tab={index === tabIndex ? "true" : "false"}
          onClick={() => handlerTabToggle(index) }
          className={index === tabIndex ? "isValid" : "" }
        >
          {tab.title}
        </StyleTabMenu>
      )}
    </StyledTabHead>
    {/* tabでコンテンツを切り替え */}
    <TabContent />
    </>
  )
}
export default TabHead

const StyledTabHead = styled.div`
  display: flex;
  margin: 0 auto 20px;
  border-bottom: solid 1px #cccccc;
`;

const StyleTabMenu = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #707070;
  padding: 0 2px;
  letter-spacing: 0.03em;

  &.isValid {
    border-bottom: solid 3px #5C9CA5;
  }
`;