import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import DisplayItem from './components/DisplayItem';

const Home = (props) => {
  return <></>;
};

const Error = (props) => {
  return (
    <>
      <h1 style={{color: "gold"}}>"These aren't the droids you're looking for."</h1>
      <img src="src/assets/obi-wan.jpg" alt="Obi-Wan Mind Tricking" />
    </>
    );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Searchbar></Searchbar>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/:type/:id' element={<DisplayItem />}></Route>
          <Route path='/error' element = {<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
