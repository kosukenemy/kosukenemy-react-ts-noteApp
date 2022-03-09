import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        Memo
      </StyledLogo>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  width: 100%;
  margin: 10px auto 10px;
  font-size: 20px;
`;

const StyledLogo = styled.h1`
  width: 100px;
  margin: 0;
  color: #5C9CA5;

  img {
    width: 100%;
  }
`;