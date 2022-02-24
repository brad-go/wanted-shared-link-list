import React, { useState, useEffect } from 'react';
import Container from 'components/Container';
import DetailPage from 'pages/DetailPage';
import LinkPage from 'pages/LinkPage';
import Avatar from 'components/Avatar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { fetchApi } from 'api';
import type { ApiReturnType } from 'types';

function App() {
  const [links, setLinks] = useState<ApiReturnType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApi();
        setLinks(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage />
        {/* <DetailPage /> */}
      </Container>
    </>
  );
}

export default App;
