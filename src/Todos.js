import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
  render() {
    return(
      <ul>
        {this.props.todos.map((todo, index) => {
          return <Todo text={todo.text} index={todo.index} completed={todo.completed} key={index} {...this.props}/>
        })}
      </ul>
    )
  }
}


export default Todos
