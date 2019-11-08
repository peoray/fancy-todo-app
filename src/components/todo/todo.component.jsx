import React from 'react';
import './todo.styles.css';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div>
      <ul className="todo-list">
        <li>
          <input className="todo-checkbox" type="checkbox" />
          <label></label>
          <span className="todo-text">{todo.title}</span>
          <span
            className="delete"
            onClick={deleteTodo.bind(this, todo.id)}
          ></span>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
