import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error404Page = () => {
  return (
    <Error404PageContainer>
      <ErrorText>
        404 Error
        <br />
        메인으로 가시겠어요?
      </ErrorText>
      <StyleLink to="/">
        <button>메인으로 가기</button>
      </StyleLink>
    </Error404PageContainer>
  );
};

const Error404PageContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
`;

const Button = styled.button``;

export default Error404Page;
