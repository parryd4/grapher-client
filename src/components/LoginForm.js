import React, { Component } from 'react'

class LoginForm extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state )
    this.setState({username: '', password: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label> <br />
        <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
        <br />
        <label>Password</label> <br />
        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
        <br />
        <input type='submit' />
      </form>
    )
  }
}

export default LoginForm
