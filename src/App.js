import React, { Component } from 'react';
import TodoList from './components/todo-list/todo-list.component';
import uuid from 'uuid';
// import Date from './components/date/date.component';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean room',
        completed: false
      },
      {
        id: 2,
        title: 'Do laundry',
        completed: false
      },
      {
        id: 3,
        title: 'Walk dog',
        completed: false
      }
    ],
    todo: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ todo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todos, todo } = this.state;
    const newTodo = {
      id: uuid(),
      title: todo,
      completed: false
    };
    this.setState({ todos: [...todos, newTodo] });
    // this.setState((prevState, prevProps) => {
    //   return { todos: [...todos, newTodo] };
    // }, () => ({ prevState: '' }));
    // this.setState({
    //   todo: ''
    // });
  };

  deleteTodo = id => {
    console.log('dkdk ' + id);
    const { todos } = this.state;
    this.setState(() => ({
      todos: [...todos.filter((todo) => todo.id !== id)]
    }));
  };

  render() {
    const { todos, todo } = this.state;

    const pending = todos.filter(todo => !todo.completed);

    return (
      <div>
        <h1>Daily To-Do list manager</h1>
        {/* <Date /> */}
        <TodoList
          todos={todos}
          handleChange={this.handleChange}
          pending={pending}
          todo={todo}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
