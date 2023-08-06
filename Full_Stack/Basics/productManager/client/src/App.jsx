import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <>
      <ProductForm />
      <BrowserRouter>
        <Routes>
          <Route exact path='/products' element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;