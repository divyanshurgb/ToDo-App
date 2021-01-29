import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to database and fetch new todos as they get added/removed
  useEffect(() => {
    // thus code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();    //will stop the refresh

    db.collection('todos').add({
      todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');    //clear up the input after clicking add todo button
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
          <Todo text={todo}/>
           //   <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
