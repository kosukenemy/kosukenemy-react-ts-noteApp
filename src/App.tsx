import styled from 'styled-components';
import Header from './components/organisms/Header';
import TabHead from './components/organisms/TabHead';

// Theme
import { Colors } from '././config/colors'

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
  margin: 0 auto;
  background-color: ${Colors.theme.background};
  min-height: 100vh;
  overflow-x: hidden;
`;
