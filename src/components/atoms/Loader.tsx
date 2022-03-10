import styled from 'styled-components';
import LoaderImg from '../../../public/assets/loader.gif'

const Loader = () => {
  return (
    <StyledLoader>
      <img src={LoaderImg} alt="loader" />
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