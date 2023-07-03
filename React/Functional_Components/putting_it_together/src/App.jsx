import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  return (
    <div className='App'>
      <PersonCard firstName={ 'Jane' } lastName = { 'Doe' } personAge = { 45 } hairColor = { 'Black' }/>
      <PersonCard firstName={ 'John' } lastName = { 'Smith' } personAge = { 88 } hairColor = { 'Brown' }/>
      <PersonCard firstName={ 'Millard' } lastName = { 'Fillmore' } personAge = { 50 } hairColor = { 'Brown' }/>
      <PersonCard firstName={ 'Maria' } lastName = { 'Smith' } personAge = { 62 } hairColor = { 'Brown' }/>
    </div>
  );
}

export default App