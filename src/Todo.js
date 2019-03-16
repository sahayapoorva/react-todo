import React, {Component} from 'react'

class Todo extends Component {
  render(){
    const addNewElement = this.props.filter === 'ALL' || (this.props.filter === 'COMPLETED' && this.props.completed === true) || (this.props.filter === 'PENDING' && this.props.completed === false);
    return(
      <div>
      {
        addNewElement
        ?
        <li key={this.props.index}>
          <input type="checkbox" name="checkbox" id={this.props.index} value="value" checked={this.props.completed} onChange={this.props.handleTodoChange}/>
          <label htmlFor={this.props.index}>{this.props.text}</label>
        </li>
        :
        null
      }
      </div>
    )
  }
}

export default Todo
