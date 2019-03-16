import React, {Component} from 'react'
import Filter from './Filter'

class Filters extends Component {
    render() {
      return(
        <div>
          {this.props.filters.map((filter, index) => {
            return <Filter key={index} {...filter} {...this.props}/>
          })}
        </div>
      )
    }
}

export default Filters
