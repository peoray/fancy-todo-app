import React from 'react';
import './todo.styles.css';

const Todo = ({ todo }) => {
  return (
    <div className="todo-list">
      {/* <div v-if="pending.length > 0"> */}
      {/* <p class="status busy">You have {{ pending.length }} pending item<span v-if="pending.length>1">s</span></p> */}
      <input class="todo-checkbox" type="checkbox" />
      <label></label>
      <span class="todo-text">{todo.title}</span>
      {/* <span class="delete" @click="deleteItem(item)"></span> */}

      {/* </div>  */}
    </div>
  );
};

export default Todo;
