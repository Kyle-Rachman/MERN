import { useEffect, useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import MakeTodo from './components/MakeTodo';

function App() {
  if (localStorage.getItem("todos")) {
    var startingTodos = JSON.parse(localStorage.getItem("todos"));
  } else {
    var startingTodos = [];
  };

  const [todos, setTodos] = useState(startingTodos);
  useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos))}, [todos])
  
  const addTodo = (task) => {
    setTodos([...todos,({'task' : task, 'completed' : false})]);
  };

  const removeTodo = (removedIndex) => {
    setTodos(todos.filter((todo, index) => {return index != removedIndex}));
  };

  const updateTodo = (updatedIndex) => {
    setTodos(todos.map((todo, index) => (
      index == updatedIndex ?
      todo.completed == true ? ({'task' : todo.task, 'completed' : false}) : ({'task' : todo.task, 'completed' : true}) :
      todo
    )));
  }

  return (
    <>
      <h1>To-Do List!</h1>
      <MakeTodo onAddTodo={addTodo}></MakeTodo>
      <Todos todos={todos} onUpdateTodo={updateTodo} onRemoveTodo={removeTodo}></Todos>
    </>
  );
};

export default App;



// if (todo.task != updatedTask) {
//   todo
// } else {
//   ({'task' : todo.task, 'completed' : true})
// }