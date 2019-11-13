import React from "react";
// import './todo.styles.css';

const Completed = ({ todo, deleteTodo, toggleTodoUnCompleted }) => {
  return (
    <div>
      <input
        className="todo-checkbox"
        type="checkbox"
        id={`item_${todo.id}`}
        checked={true}
        onChange={() => toggleTodoUnCompleted(todo.id)}
      />
      <label htmlFor={`item_${todo.id}`}></label>
      <span className="todo-text">{todo.title}</span>
      <span className="delete" onClick={deleteTodo.bind(this, todo.id)}></span>
    </div>
  );
};

export default Completed;
