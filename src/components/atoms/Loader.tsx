import styled from 'styled-components';
// import LoaderImg from '../../../docs/assets/loader.gif'

const Loader = () => {
  return (
    <StyledLoader>
      <div>...loading</div>
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