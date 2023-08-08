import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Home />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;