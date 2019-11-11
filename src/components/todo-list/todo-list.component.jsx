import React from 'react';
import Todo from '../todo/todo.component';
import Today from '../date/date.component';
import AddTodo from '../add-todo/add-todo.component';
import Completed from '../completed-todos/completed-todos.component';

import './todo-list.styles.css';

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
        pending.map(todo => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))
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

      <div className="control-buttons">
        {/* {completed.length > 0 ?  <div className="btn btn-secondary" onClick={toggleShowComplete} {!showComplete ? <span>Show</span> : <span>Hide</span>} Complete</div>}  */}

        {todos.length > 0 ? (
          <div className="btn btn-secondary" onClick={clearAll}>
            Clear All
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TodoList;
