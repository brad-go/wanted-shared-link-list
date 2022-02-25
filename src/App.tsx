import React from 'react';
import Router from './router/Router';
import { Container } from 'components';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </>
  );
}

export default App;
