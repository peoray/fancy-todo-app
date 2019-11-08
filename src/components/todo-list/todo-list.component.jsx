import React from 'react';
import Todo from '../todo/todo.component';
import Today from '../date/date.component';
import AddTodo from '../add-todo/add-todo.component';

import './todo-list.styles.css';

const TodoList = ({
  todos,
  handleChange,
  pending,
  todo,
  addTodo,
  deleteTodo
}) => {
  return (
    <div className="todo-wrapper">
      <Today />
      <AddTodo handleChange={handleChange} todo={todo} addTodo={addTodo} />
      {pending && pending.length > 0 ? (
        <p className="status busy">
          You have {pending.length} pending item
          {pending.length > 1 ? <span>s</span> : ''}
        </p>
      ) : null}
      {todos.length > 0 ? (
        todos.map(todo => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p className="status free">
          <img src="images/beer_celebration.svg" alt="celebration" />
          Time to chill! You have no todos.
        </p>
      )}
    </div>
  );
};

export default TodoList;
