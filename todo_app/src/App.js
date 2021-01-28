import React, { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go for a Walk', 'Clean your room', 'Learn Javascript']); 
  const [input, setInput] = useState('');
  console.log('😆', input); 

  const addTodo = (event) => {
    //this will fire off when we click the button
    console.log('😆', 'Stay Happy!!!');
  }

  return (
    <div className="App">
      <h1> Hello DIVI </h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>
        Add Todo
      </button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
