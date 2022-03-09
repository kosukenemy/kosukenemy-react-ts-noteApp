import styled from 'styled-components';
import MemoItems from '../molecules/MemoItems'

const MemoList = () => {
  return (
    <StyledWrapper>
      <MemoItems />
    </StyledWrapper>
  )
}

export default MemoList

const StyledWrapper = styled.div`
  width: 860px;
`;