import React from 'react';
import Todo from '../todo/todo.component';
import Today from '../date/date.component';
import AddTodo from '../add-todo/add-todo.component';

import './todo-list.styles.css';

const TodoList = ({ todos, handleChange }) => {
  return (
    <div className="todo-wrapper">
      <Today />
      <AddTodo handleChange={handleChange} />
      {todos.length > 0 ? (
        todos.map(todo => <Todo todo={todo} key={todo.id} />)
      ) : (
        <p class="status free">
          <img src="images/beer_celebration.svg" alt="celebration" />
          Time to chill! You have no todos.
        </p>
      )}
    </div>
  );
};

export default TodoList;
