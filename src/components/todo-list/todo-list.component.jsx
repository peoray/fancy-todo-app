import React from 'react';
import Todo from '../todo/todo.component';

const TodoList = props => {
  const { todos } = props;
  return (
    <div>
      <h1>Helllo from todo list</h1>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
