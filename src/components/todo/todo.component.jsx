import React from 'react';

const Todo = props => {
  const { todo } = props;
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

export default Todo;
