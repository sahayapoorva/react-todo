import React, { Component } from 'react';
import Todos from './Todos';
import Filters from './Filters';
import './App.css';

const filterConstants = [
  {
    name: 'VISIBILITYFILTER',
    id: 'filter1',
    value: 'ALL'
  },
  {
    name: 'VISIBILITYFILTER',
    id: 'filter2',
    value: 'COMPLETED'
  },
  {
    name: 'VISIBILITYFILTER',
    id: 'filter3',
    value: 'PENDING'
  }
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visibilityFilters: 'ALL',
      todos: [],
      newTodoText: ''
    }

    this.addTodo = this.addTodo.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }

  addTodo() {
    let todos = this.state.todos.slice()
    let size = todos.length
    todos.push({
      text: this.state.newTodoText,
      completed: false,
      index: 'todo' + size
    })

    this.setState({
      todos: todos,
      newTodoText: ''
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.addTodo();
  }

  handleOnChange(event) {
    this.setState({
      newTodoText: event.target.value
    })
  }

  handleFilterChange(event) {
    const filterValue = event.target.value
    this.setState({
      visibilityFilters: filterValue
    })
  }

  handleTodoChange(event) {
    let todos = this.state.todos.slice()
    let updatedIndex = event.target.id

    todos.map((todo, index) => {
      if(todo.index === updatedIndex) {
        todo.completed = !todo.completed
      }

      return todo
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} filter={this.state.visibilityFilters} handleTodoChange={this.handleTodoChange}/>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.newTodoText} onChange={this.handleOnChange}/>
          <button type="submit">Submit</button>
        </form>
        <Filters filters={filterConstants} selected={this.state.visibilityFilters} handleFilterChange={this.handleFilterChange} />
      </div>
    );
  }
}

export default App;
