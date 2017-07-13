import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import { AuthAdapter } from '../adapters'

import SignInContainer from '../containers/SignInContainer'
import DashboardContainer from '../containers/DashboardContainer'

export default class Main extends Component {

  constructor() {
    super()
    this.state = {
      currentData = {},
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

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Grapher</h2>
        </div>
        <h3 className="App-intro">Upload your CSV and build a graph!</h3>
        {/*  */}

        <div className='container-fluid'>

          {/* I need a layout overhaul */}
          <Route exact path='/' render={()=> (<div> { (localStorage.id || this.state.isLoggedIn ) ? null : <p><Link to='/signin'>Sign up or Log in</ Link> for more features! or...</p>} <p>Jump right in and <Link to='/dashboard'>upload your CSV</Link></p> </div>)} />


          <Route path='/signin' render={() => ( localStorage.id || this.state.isLoggedIn ? <Redirect to='/dashboard' /> : <SignInContainer onSubmit={this.logIn} />)} />
          <Route path='/dashboard' render={()=> ( <DashboardContainer /> )} />
        </div>

      </div>
    )
  }
}
