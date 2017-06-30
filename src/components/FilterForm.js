import React, { Component } from 'react'

export default class FilterForm extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <p>I will filter things</p>
    )
  }
}
