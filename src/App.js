import React, { Component } from 'react';
import TodoList from './components/todo-list/todo-list.component';
// import Date from './components/date/date.component';
import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Clean room',
      //   done: false
      // },
      // {
      //   id: 2,
      //   title: 'Do laundry',
      //   done: false
      // },
      // {
      //   id: 3,
      //   title: 'Walk dog',
      //   done: false
      // }
    ],
    todo: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({todo: e.target.value})
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Daily To-Do list manager</h1>
        {/* <Date /> */}
        <TodoList todos={todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
