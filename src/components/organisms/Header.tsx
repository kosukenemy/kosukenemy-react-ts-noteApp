import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <div>🗒</div>
        <div>memo</div>
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
  margin: 0;
  color: #707070;
  display: flex;
  font-size: 30px;

  img {
    width: 100%;
  }
`;