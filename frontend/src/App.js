import styled from 'styled-components';
import bg from './img/bg.png';
import {MainLayout} from './styles/layouts';
import Orb from './components/orb/orb';
import Navigation from './components/Navigation/navigation';

function App() {

  const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-opacity: 0;
`;

  return (
    <AppStyled className="App">
      <Orb />
      <MainLayout>
        <Navigation />
        
      </MainLayout>

    </AppStyled>
  );
}



export default App;
