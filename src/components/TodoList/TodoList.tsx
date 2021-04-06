import React from "react";
import { Itodo } from "../../Interfaces/interfaces";

type TodoListProps = {
  todos: Itodo[]
  onToggle?(id:number): void
  onRemove?(id:number): void
};

export const TodoList: React.FC<TodoListProps> = ({ todos , onRemove, onToggle }) => {
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
              <input type="checkbox" checked={todo.completed} onChange={onToggle?.bind(null, todo.id)}/>
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>Delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
