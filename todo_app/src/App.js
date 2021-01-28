import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go for a Walk', 'Clean your room', 'Learn Javascript']); 
  const [input, setInput] = useState('');
  console.log('😆', input); 

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();    //will stop the refresh
    console.log('😆', 'Stay Happy!!!');
    setTodos([...todos, input]);
    setInput('');    //clear up the input after clicking add todo button
    console.log(todos);
  }

  return (
    <div className="App">
      <h1> Hello DIVI! </h1>
      <form>
      <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>


        <Button disabled={!input} Type="Submit" onClick={addTodo}variant="contained" color="primary">
        Add Todo
        </Button>
      {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>

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
