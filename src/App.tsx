import React, { useState, useEffect } from 'react';
import { Container } from 'components';
import { DetailPage, LinkPage, Error404Page } from 'pages';
import type { ApiReturnType } from 'types';
import { fetchApi } from 'api';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Router>
            <Routes>
              <Route path="/" element={<LinkPage links={links} />} />
              <Route path="/:key" element={<DetailPage links={links} />} />
              <Route path="*" element={<Error404Page />} />
            </Routes>
          </Router>
        </Container>
      )}
    </>
  );
}

export default App;
