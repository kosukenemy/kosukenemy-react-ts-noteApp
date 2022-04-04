import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader>
      ...now loading
    </StyledLoader>
  )
}

export default Loader

const StyledLoader = styled.div`
  display: block;
  margin: 0 auto;

  img {
    display: block;
    margin: 0 auto;
  }
`;