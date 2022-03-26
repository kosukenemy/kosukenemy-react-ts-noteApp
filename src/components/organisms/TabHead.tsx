import React, { useState } from 'react';
import styled from 'styled-components';
import TabContent from '../organisms/TabContent'
import { useNavigate } from 'react-router-dom';

// config
import { TabHeadConfig } from '../../appConfig'

// theme
import { Colors } from '../../config/colors';

const TabHead = () => {
  let [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  
  const handlerTabToggle = ( index:number ) => {
    setTabIndex(index);

    switch (index) {
      case 0: 
        return navigate('/');
      case 1: 
        return navigate('/new');
      case 2:
        return navigate('/trending');
    }
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
  margin: 0 auto;
  background-color: ${Colors.theme.header};
  padding: 0 20px;
`;

const StyleTabMenu = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.theme.text.base};
  padding: 0 2px;
  letter-spacing: 0.03em;
  padding-bottom: 10px;

  &.isValid {
    border-bottom: solid 2px ${Colors.theme.text.base};
  }
`;