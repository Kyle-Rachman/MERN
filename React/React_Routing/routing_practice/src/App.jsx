import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Home = (props) => {
  return (
    <p>Welcome</p>
  );
};

const DisplayText = (props) => {
  const { string, textColor, backgroundColor } = useParams();
  const mystyle = {
    color: `${textColor}`,
    backgroundColor: `${backgroundColor}`,
    padding: `20px 0px`,
    textAlign: `center`
  };
  if (isNaN(string)) {
    return (
      <>
        <p style={mystyle}>The word is: {string}</p>
      </>
    );
  } else {
    return (
      <p style={mystyle}>The number is: {string}</p>
    );
  };
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/:string" element={<DisplayText />}>
            <Route path="/:string/:textColor" element={<DisplayText />}>
              <Route path="/:string/:textColor/:backgroundColor" element={<DisplayText />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
