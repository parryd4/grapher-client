import React, { Component } from 'react'

import TableDisplay from './TableDisplay'
import ScatterDisplay from './ScatterDisplay'

export default class FilterForm extends Component {

  render() {
    // console.log(this.props)
    // <ScatterDisplay data={this.props.data} />
    // console.log(Object.keys(this.state.data[0]))
    return (
      <div>
        <TableDisplay data={this.props.data}/>
        <p>I will filter things</p>
      </div>
    )
  }
}
