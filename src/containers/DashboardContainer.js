import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

import LoadData from '../components/LoadData'
import BuildChart from '../components/BuildChart'

export default class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentData: [],
      filename: ""
    }
    this.handleData = this.handleData.bind(this)
  }

  handleData(data) {
    this.setState({
      currentData: data
    })
  }

  render() {
    console.log(this.state.currentData.length)
    return (
      <div className="container-fluid">
        <LoadData handleData={this.handleData}/>
        <div className="container-fluid"></div>
        {/* routes can die in a grease fire. */}

        {this.state.currentData.length > 0 ? <BuildChart currentData={this.state.currentData}/> : <br />}
      </div>
    )
  }
}
