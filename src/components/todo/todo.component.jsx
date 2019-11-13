import React from "react";
import "../todo/todo.styles.css";

const Todo = ({ todo, deleteTodo, toggleTodoCompleted }) => {
  return (
    <div>
      <input
        className="todo-checkbox"
        type="checkbox"
        id={`item_${todo.id}`}
        onChange={() => toggleTodoCompleted(todo.id)}
      />
      <label htmlFor={`item_${todo.id}`}></label>
      <span className="todo-text">{todo.title}</span>
      <span className="delete" onClick={deleteTodo.bind(this, todo.id)}></span>
    </div>
  );
};

export default Todo;
