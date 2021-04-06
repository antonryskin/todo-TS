import React, { useState } from "react";
import { Itodo } from "../../Interfaces/interfaces";
import Navbar from "../Navbar/Navbar";
import TodoForm from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<Itodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
  );
}

export default App;
