import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { AuthAdapter } from './adapters'

import LoginForm from './components/LoginForm'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    }
    this.logIn = this.logIn.bind(this)
  }

  logIn(loginParams) {
    AuthAdapter.login(loginParams)
      .then( user => {
        if (!user.error) {
          this.setState({
            auth: {
              isLoggedIn: true,
              user: user
            }
          })
         localStorage.setItem('id', user.id)
        }
      })
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Grapher</h2>
        </div>
        <h3 className="App-intro">Upload your CSV and build a graph!</h3>
        <Link to='/login'><p>Sign up or Log in for more features!</p></ Link>
        <Route path='/login' render={() => <LoginForm onSubmit={this.logIn}/>} />
      </div>
    );
  }
}

export default App;
