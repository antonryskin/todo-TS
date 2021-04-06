import React, { useState } from 'react';
import { Itodo } from '../../Interfaces/interfaces';
import Navbar from '../Navbar/Navbar';
import TodoForm from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState<Itodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
    
  }
  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos}/>
      </div>
    </>
  );
}


export default App;
