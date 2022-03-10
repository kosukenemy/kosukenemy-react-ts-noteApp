import styled from 'styled-components';
import Header from './components/organisms/Header'
import TabHead from './components/organisms/TabHead'

function App() {
  return (
    <div className="App">
      <StyledContainerLayout>
        <Header />
        <TabHead />
      </StyledContainerLayout>
    </div>
  )
}

export default App

const StyledContainerLayout = styled.div`
  width: 860px;
  margin: 0 auto;
`;
