import React from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import Avatar from "components/Avatar";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <LinkPage /> */}
        {/* <DetailPage /> */}
        <Avatar text="테스트" />
      </Container>
    </>
  );
}

export default App;
