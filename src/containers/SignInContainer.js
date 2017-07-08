import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'


export default class SignInContainer extends Component {

  render() {
    return (
      <div className="row">
        <div className="col"><LoginForm onSubmit={this.props.onSubmit}/></div>
        <div className="col"><SignupForm onSubmit={this.props.onSubmit}/></div>
      </div>
    )
  }
}
