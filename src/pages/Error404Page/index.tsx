import React from 'react';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';
import styled from 'styled-components';

const Error404Page = () => {
  return (
    <Error404PageContainer>
      <ErrorText>404 Error</ErrorText>
      <StyleLink to="/">
        <Button>메인으로 가기</Button>
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
  font-size: 42px;
  line-height: 1.2em;
  font-weight: 700;
  color: #f53354;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  all: unset;
  padding: 20px;
  border: 2px solid ${colors.black};
  border-radius: 12px;
  font-weight: 600;
  color: ${colors.black};
`;

export default Error404Page;
