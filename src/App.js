import React from 'react';
import GlobalStyle from './styles/global';
import { Container, ChocolateList } from './styles/style';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <h1>Teste</h1>
          <ChocolateList>
            <li>aaaaa</li>
            <li>aaaaa</li>
            <li>aaaaa</li>
            <li>aaaaa</li>
          </ChocolateList>
        </Container>
      </>
    </div>
  );
}

export default App;
