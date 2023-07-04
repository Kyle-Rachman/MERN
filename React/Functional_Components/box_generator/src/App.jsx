import './App.css';
import MakeBox from './components/MakeBox';
import Boxes from './components/Boxes'
import { useState } from 'react';

function App() {
  const [boxInfos, setBoxInfos] = useState([]);
  const addBox = (color,size) => {
    setBoxInfos([...boxInfos,({'color' : color, 'size' : size})]);
  };

  return (
    <>
      <h1>Box Generator:</h1>
      <MakeBox onAddBox={ addBox }></MakeBox>
      <Boxes boxInfoList={boxInfos}></Boxes>
    </>
  );
};

export default App;