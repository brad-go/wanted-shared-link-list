import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LinkPage, DetailPage, Error404Page } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkPage />} />
        <Route path="/:currentKey" element={<DetailPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
