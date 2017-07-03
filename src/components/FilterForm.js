import React, { Component } from 'react'

import TableDisplay from './TableDisplay'
import ScatterDisplay from './ScatterDisplay'

export default class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      x: "",
      y: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("tabledisplay")
    console.log(this.props)
    console.log("and then")
    console.log(nextProps)
    this.setState({
      data: nextProps.data
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log("filterform")
    console.log(this.props)
    console.log(this.state)
    // <TableDisplay data={this.state.data}/>
    console.log(Object.keys(this.state.data[0]))
    return (
      <div>
        <div>
          <select name="x" onChange={this.handleChange} value={this.state.x}>
          <option value="">Select X</option>
          {Object.keys(this.state.data[0]).map(n => <option value={n}>{n}</option>)}
          </select>
          <select name="y" onChange={this.handleChange} value={this.state.y}>
          <option value="">Select Y</option>
          {Object.keys(this.state.data[0]).map(n => <option value={n}>{n}</option>)}
          </select>
        </div>
        {this.state.y !== "" ? <ScatterDisplay data={this.state.data} x={this.state.x} y={this.state.y}/> : null}
        <p>I will filter things</p>
      </div>
    )
  }
}
