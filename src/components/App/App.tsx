import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import TodoForm from '../TodoForm/TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log('Add new todo', title);
    
  }
  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={addHandler}/>
      </div>
    </>
  );
}


export default App;
