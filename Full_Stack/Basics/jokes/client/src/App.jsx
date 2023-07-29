import React from 'react';
import DisplayRandomJoke from './components/DisplayRandomJoke';
import JokeForm from './components/JokeForm';
function App() {
  return (
    <div className="App">
      <JokeForm />
      <DisplayRandomJoke />
    </div>
  );
}
export default App;