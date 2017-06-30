import React, { Component } from 'react'

import TableDisplay from './TableDisplay'
import ScatterDisplay from './ScatterDisplay'

export default class FilterForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.data)
    // console.log(nextProps.data)
    if (nextProps.data !== this.props.data ){
      console.log("before")

      this.setState = { data: nextProps.data }
    }
  }

  render() {
    console.log(this.props)
    console.log(Object.keys(this.state.data[0]))
    return (
      <div>
        <p>I will filter things</p>
        <TableDisplay tableData={this.props.data}/>
        <ScatterDisplay data={this.props.data} />
      </div>
    )
  }
}
