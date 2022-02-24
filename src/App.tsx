import React, { useState, useEffect } from 'react';
import { Container, Link, Avatar } from 'components';
import { DetailPage, LinkPage } from 'pages';
import type { ApiReturnType } from 'types';
import { fetchApi } from 'api';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  const [links, setLinks] = useState<ApiReturnType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchApi();
        setLinks(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <GlobalStyle />
      {!isLoading && (
        <Container>
          {/* <LinkPage links={links} /> */}
          <DetailPage info={links[2]} />
        </Container>
      )}
    </>
  );
}

export default App;
