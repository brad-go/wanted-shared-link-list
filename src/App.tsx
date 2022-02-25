import React, { useState, useEffect } from 'react';
import { Container } from 'components';
import { DetailPage, LinkPage } from 'pages';
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
              <Route path="/" element={<LinkPage links={links} />}></Route>
              {links.map((link, idx) => (
                <Route
                  key={link.key}
                  path="/details/:key"
                  element={<DetailPage info={link} />}
                />
              ))}
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </Router>
        </Container>
      )}
    </>
  );
}

export default App;
