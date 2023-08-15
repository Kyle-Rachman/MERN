import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NewAuthor from './components/NewAuthor/NewAuthor';
import UpdateAuthor from './components/UpdateAuthor/UpdateAuthor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/authors' element={<Home />}></Route>
          <Route path='/authors/new' element={<NewAuthor />}></Route>
          <Route path='/authors/:id/edit' element={<UpdateAuthor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;