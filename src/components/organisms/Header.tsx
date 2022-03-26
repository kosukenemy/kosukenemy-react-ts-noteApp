import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// logo
import logo from '../../../public/assets/zenn.png';

// theme
import { Colors } from '../../config/colors';

// import components
import Button from '../atoms/Button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledLogo>
          <img src={logo} alt="zenn" />
        </StyledLogo>
        {/* navbar */}
        <div>
          <Button 
            text="Add new"
            background={Colors.theme.button.add}
            color={Colors.theme.button.text}
            onClick={() => navigate('/new')}
          />
        </div>
      </StyledHeaderInner>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 20px;
  min-height: 40px;
  font-size: 20px;
  background-color: ${Colors.theme.header};
`;

const StyledHeaderInner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.h1`
  margin: 0;
  color: #707070;
  display: block;
  width: 100px;

  img {
    width: 100%;
  }
`;