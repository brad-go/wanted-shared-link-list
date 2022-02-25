import React from 'react';
import { Container } from 'components';
import GlobalStyle from 'styles/GlobalStyle';
import Router from './router/Router';

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
