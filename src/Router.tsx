import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './Navi/Navi';
import ProductMain from './ProductMain/ProductMain';
import ProductDetail from './ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path='/' element={<ProductMain />} />
        <Route path='/detail' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
