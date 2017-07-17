import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import { AuthAdapter } from '../adapters'

import LoginForm from './LoginForm'
import DashboardContainer from '../containers/DashboardContainer'

export default class Main extends Component {

  constructor() {
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    }
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  logIn(loginParams) {
    AuthAdapter.login(loginParams)
      .then( user => {
        if (!user.error) {
          console.log(user)
          localStorage.setItem('id', user.id)
          this.setState({
            auth: {
              isLoggedIn: true,
              user: user
            }
          })
        }
      })
  }

  logOut() {
    localStorage.clear()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    }
  }

  render() {
    return (
      <div>

        <div className="title">
          <h1>Grapher</h1>
        </div>
        <div>
          <div className="sideLog">
            {localStorage.id || this.state.auth.isLoggedIn ? <Link to={'/'}><button onClick={this.logOut}>Logout</button></Link> : <LoginForm onSubmit={this.logIn} />}
          </div>

          <Route path='/' render={() => ( localStorage.id || this.state.auth.isLoggedIn ? <Redirect to='/dashboard' /> : <div className="welcome"> <p>" BestIntroductionImaginable />"</p></div>)} />
          <Route path='/dashboard' render={()=> ( <DashboardContainer /> )} />
        </div>

      </div>
    )
  }
}
