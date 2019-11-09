import React from 'react';
// import './todo.styles.css';

const Completed = ({ todo, deleteTodo }) => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Hell form completed</h1>

      <ul className="todo-list archived">
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

export default Completed;
