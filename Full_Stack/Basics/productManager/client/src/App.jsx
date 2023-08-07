import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/products' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;