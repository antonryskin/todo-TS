import React from "react";
import { Itodo } from "../../Interfaces/interfaces";

type TodoListProps = {
  todos: Itodo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
          const classes = ['todo']
          if (todo.completed) {
            classes.push('completed')
          }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed}/>
              <span>{todo.title}</span>
              <i className="material-icons red-text">Delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
