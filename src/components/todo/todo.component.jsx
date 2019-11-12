import React from 'react';
import './todo.styles.css';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div>
      <input
        className="todo-checkbox"
        type="checkbox"
        id={`item_${todo.id}`}
        onChange={() => (todo.completed = !todo.completd)}
      />
      <label htmlFor={`item_${todo.id}`}></label>
      <span className="todo-text">{todo.title}</span>
      <span className="delete" onClick={deleteTodo.bind(this, todo.id)}></span>
      {/* </li> */}
      {/* </ul> */}
    </div>
  );
};

export default Todo;
