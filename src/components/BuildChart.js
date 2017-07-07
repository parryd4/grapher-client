import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import * as d3 from 'd3'

import TableDisplay from './TableDisplay'

export default class BuildChart extends Component {
  constructor() {
    super()

    this.state = {
      view: "TableDisplay"
    }
  }


  componentDidMount() {
    console.log("father can you hear me how i have let you down")
  }


  render() {
    console.log(this.props)
    console.log(this.state)
    // if (this.props.currentData.length !== 0){
    //   return (
    //     <Redirect to='/dashboard' />
    //   )
    // }
    return (
      <div className="container-fluid">
        <div className="row">
          <p>does this even exist?</p>
          <TableDisplay currentData={this.props.currentData} />
        </div>
      </div>
    )
  }
}