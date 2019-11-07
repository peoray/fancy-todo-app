import React from 'react';
import Todo from '../todo/todo.component';
import Today from '../date/date.component';

import './todo-list.styles.css';

const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todo-wrapper">
      <Today />
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
