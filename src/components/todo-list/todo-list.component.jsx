import React from 'react';
import Todo from '../todo/todo.component';
import Today from '../date/date.component';
import AddTodo from '../add-todo/add-todo.component';
import Completed from '../completed-todos/completed-todos.component';

import './todo-list.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const TodoList = ({
  todos,
  handleChange,
  pending,
  completed,
  todo,
  addTodo,
  deleteTodo,
  clearAll
}) => {
  console.log(pending.length);
  console.log(completed.length);
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
      {pending.length > 0 ? (
        <ul className="todo-list">
          {pending.map(todo => (
            <li>
              <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="status free">
          <img src="images/beer_celebration.svg" alt="celebration" />
          Time to chill! You have no todos.
        </p>
      )}

      {completed && completed.length > 0 ? (
        <p className="status busy">
          You have {completed.length} completed item
          {completed.length > 1 ? <span>s</span> : ''}
        </p>
      ) : null}

      {completed.length > 0
        ? completed.map(todo => (
            <Completed todo={todo} key={todo.id} deleteTodo={deleteTodo} />
          ))
        : null}

      {todos.length > 0 ? (
        <CustomButton onClick={clearAll}>Clear All</CustomButton>
      ) : (
        ''
      )}
    </div>
  );
};

export default TodoList;
