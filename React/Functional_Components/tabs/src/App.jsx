import './App.css';
import Tabs from './components/tabs';

function App() {
  const data = [{"label" : "Tab 1",
                  "content" : "Tab 1 info"},
                {"label" : "Tab 2",
                  "content" : "Tab 2 info"},
                {"label" : "Tab 3",
                  "content" : "Tab 3 info"},
                {"label" : "Tab 4",
                  "content" : "Tab 4 info"}];
  return (
    <>
      <Tabs array={data}></Tabs>
    </>
  );
};

export default App;
