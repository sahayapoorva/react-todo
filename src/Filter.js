import React, {Component} from 'react'

class Filter extends Component {
  render() {
    return(
      <div>
        <input type="radio" name={this.props.name} id={this.props.id} checked={this.props.value === this.props.selected} value={this.props.value} onChange={this.props.handleFilterChange}/>
        <label htmlFor={this.props.id}>{this.props.value}</label>
      </div>
    )
  }
}

export default Filter
