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
      completedTodos,
      handleChange,

      todo,
      addTodo,
      deleteTodo,
      toggleTodoCompleted,
      toggleTodoUnCompleted,
      checked,
      clearAll
    } = this.props;

    return (
      <div className="todo-wrapper">
        <Today />
        <AddTodo handleChange={handleChange} todo={todo} addTodo={addTodo} />

        {todos && todos.length > 0 ? (
          <p className="status busy">
            You have {todos.length} todos item
            {todos.length > 1 ? <span>s</span> : ""}
          </p>
        ) : null}

        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li>
                <Todo
                  todo={todo}
                  index={index}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  toggleTodoCompleted={toggleTodoCompleted}
                  checked={checked}
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

        {completedTodos &&
        completedTodos.length > 0 &&
        this.state.showCompleted ? (
          <p className="status busy">
            Completed todos:{" "}
            {Math.floor((todos.length / completedTodos.length) * 100) + "%"}
            {/* You have {completedTodos.length} completed item
            {completedTodos.length > 1 ? <span>s</span> : ""} */}
          </p>
        ) : null}

        {completedTodos.length > 0 && this.state.showCompleted ? (
          <ul className="todo-list archived">
            {completedTodos.map((todo, index) => (
              <li key={todo.id}>
                <Completed
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  index={index}
                  toggleTodoUnCompleted={toggleTodoUnCompleted}
                  checked={checked}
                />
              </li>
            ))}
          </ul>
        ) : null}

        <div className="control-buttons">
          {completedTodos.length > 0 ? (
            <CustomButton
              onClick={() =>
                this.setState(prevState => ({
                  showCompleted: !prevState.showCompleted
                }))
              }
            >
              {!this.state.showCompleted || completedTodos.length === 0
                ? "Show Completed"
                : "Hide Completed"}
            </CustomButton>
          ) : null}

          {todos.length > 0 || completedTodos.length > 0 ? (
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
