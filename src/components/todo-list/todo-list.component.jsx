import React, { Component } from "react";
import Todo from "../todo/todo.component";
import Today from "../date/date.component";
import AddTodo from "../add-todo/add-todo.component";
import Completed from "../completed-todos/completed-todos.component";

import "./todo-list.styles.css";
import CustomButton from "../custom-button/custom-button.component";

class TodoList extends Component {
  state = {
    showCompleted: false
  };

  render() {
    const {
      todos,
      handleChange,
      pending,
      completed,
      todo,
      addTodo,
      deleteTodo,
      toggleTodoCompleted,
      clearAll
    } = this.props;
    return (
      <div className="todo-wrapper">
        <Today />
        <AddTodo handleChange={handleChange} todo={todo} addTodo={addTodo} />

        {pending && pending.length > 0 ? (
          <p className="status busy">
            You have {pending.length} pending item
            {pending.length > 1 ? <span>s</span> : ""}
          </p>
        ) : null}

        {pending.length > 0 ? (
          <ul className="todo-list">
            {pending.map((todo, index) => (
              <li>
                <Todo
                  todo={todo}
                  index={index}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  toggleTodoCompleted={toggleTodoCompleted}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="status free">
            <img src="images/beer_celebration.svg" alt="celebration" />
            Time to chill! You have no todos.
          </p>
        )}

        {completed && completed.length > 0 && this.state.showCompleted ? (
          <p className="status busy">
            You have {completed.length} completed item
            {completed.length > 1 ? <span>s</span> : ""}
          </p>
        ) : null}

        {completed.length > 0 && this.state.showCompleted ? (
          <ul className="todo-list archived">
            {completed.map((todo, index) => (
              <li key={todo.id}>
                <Completed
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  index={index}
                  toggleTodoCompleted={toggleTodoCompleted}
                />
              </li>
            ))}
          </ul>
        ) : null}

        <div className="control-buttons">
          {completed.length > 0 ? (
            <CustomButton
              onClick={() =>
                this.setState(prevState => ({
                  showCompleted: !prevState.showCompleted
                }))
              }
            >
              Show Completed
            </CustomButton>
          ) : null}

          {todos.length > 0 ? (
            <CustomButton onClick={clearAll}>Clear All</CustomButton>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
