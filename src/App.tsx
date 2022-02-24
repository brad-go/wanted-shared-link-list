import React, { useState, useEffect } from 'react';
import { Container, Link, Avatar } from 'components';
import { DetailPage, LinkPage } from 'pages';
import type { ApiReturnType } from 'types';
import { fetchApi } from 'api';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  const [links, setLinks] = useState<ApiReturnType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApi();
        setLinks(data);
        console.log(data);
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
        <LinkPage links={links} />
        {/* <DetailPage /> */}
        {/* <img src={links[0].thumbnailUrl} /> */}
      </Container>
    </>
  );
}

export default App;
