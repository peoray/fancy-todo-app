import React from 'react';

const AddTodo = ({ handleChange }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          class="input-todo"
          placeholder="Take the garbage out"
          onChange={handleChange}
        />
        <div class="btn btn-add">+</div>
      </form>
    </div>
  );
};

export default AddTodo;
