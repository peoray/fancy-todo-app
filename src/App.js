import React, { Component } from "react";
import TodoList from "./components/todo-list/todo-list.component";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    completedTodos: [],
    todo: "",
    checked: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ todo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todos, todo } = this.state;
    // validation: check if input field is empty or not
    if (todo) {
      const newTodo = {
        id: uuid(),
        title: todo,
        completed: false
      };
      this.setState(
        () => {
          return { todos: [...todos, newTodo], todo: "" };
        },
        () => ({ todo: "" })
      );
    } else {
      return false;
    }
  };

  deleteTodo = id => {
    const { todos, completedTodos } = this.state;
    this.setState(() => ({
      todos: [...todos.filter(todo => todo.id !== id)],
      completedTodos: [...completedTodos.filter(todo => todo.id !== id)],
    }));
  };

  clearAll = () => {
    this.setState({ todos: [], completedTodos: [] });
  };

  toggleTodoCompleted = index => {
    this.setState(({ todos, completedTodos, checked }) => {
      return {
        todos: todos.filter(todo => todo.id !== index),
        completedTodos: completedTodos.concat(todos.filter(todo => todo.id === index)),
        checked: !checked
      }
    });
  };

  toggleTodoUnCompleted = index => {
    this.setState(({ todos, completedTodos }) => {
     return {
       todos: todos.concat(completedTodos.filter(todo => todo.id === index)),
       completedTodos: completedTodos.filter(todo => todo.id !== index)
     }
    });
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);
      if (todos) {
        this.setState({ todos });
      }

      const json2 = localStorage.getItem("completedTodos");
      const completedTodos = JSON.parse(json2);
      if (completedTodos) {
        this.setState({ completedTodos });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos, completedTodos } = this.state;

    if (prevState.todos.length !== todos.length) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
    if (prevState.completedTodos.length !== completedTodos.length) {
      const json2 = JSON.stringify(completedTodos);
      localStorage.setItem("completedTodos", json2);
    }
  }

  render() {
    const { todos, todo, completedTodos, checked } = this.state;

    return (
      <div>
        <h1>Daily To-Do list manager</h1>
        <TodoList
          todos={todos}
          completedTodos={completedTodos}
          handleChange={this.handleChange}
          todo={todo}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          clearAll={this.clearAll}
          toggleTodoCompleted={this.toggleTodoCompleted}
          toggleTodoUnCompleted={this.toggleTodoUnCompleted}
          checked={checked}
        />
      </div>
    );
  }
}

export default App;
