import React, { Component } from "react";
import TodoList from "./components/todo-list/todo-list.component";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    todo: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ todo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todos, todo } = this.state;
    // validation: check is input field is empty or not
    if (todo) {
      const newTodo = {
        id: uuid(),
        title: todo,
        completed: false
      };
      // this.setState({ todos: [...todos, newTodo] });
      this.setState(
        (prevState, prevProps) => {
          return { todos: [...todos, newTodo] };
        },
        () => ({ prevState: "" })
      );
      // this.setState({
      //   todo: ''
      // });
      // }
    } else {
      return false;
    }
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState(() => ({
      todos: [...todos.filter(todo => todo.id !== id)]
    }));
  };

  clearAll = () => {
    this.setState({ todos: [] });
  };

  toggleTodoCompleted = index => {
    this.setState(({ todos }) => {
      const newTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      // newTodos[index].completed = !todos[index].completed;
      return {
        todos: newTodos
      };
    });
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);
      if (todos) {
        this.setState({ todos });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    if (prevState.todos.length !== todos.length) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }

  render() {
    const { todos, todo } = this.state;

    const pending = todos.filter(todo => !todo.completed);

    const completed = todos.filter(todo => todo.completed);

    return (
      <div>
        <h1>Daily To-Do list manager</h1>
        <TodoList
          todos={todos}
          handleChange={this.handleChange}
          pending={pending}
          completed={completed}
          todo={todo}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          clearAll={this.clearAll}
          toggleTodoCompleted={this.toggleTodoCompleted}
        />
      </div>
    );
  }
}

export default App;
