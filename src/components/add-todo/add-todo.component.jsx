import React from 'react';
import classnames from 'classnames';
import './add-todo.styles.css';

const AddTodo = ({ handleChange, todo, addTodo }) => {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Take the garbage out"
          onChange={handleChange}
        />
        <div
          className={classnames('btn btn-add', { active: todo })}
          onClick={addTodo}
        >
          +
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
