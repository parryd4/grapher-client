import React, { Component } from 'react'

class SignupForm extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
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
    if (this.state.password === this.state.passwordConfirm) {
      this.props.onSubmit( this.state )
      this.setState({username: '', password: '', passwordConfirm: ''})

    }
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
        <label>Confirm Password</label> <br />
        <input type='password' name='passwordConfirm' value={this.state.passwordConfirm} onChange={this.handleChange}/>
        <br />
        <input type='submit' />
      </form>
    )
  }
}

export default SignupForm
