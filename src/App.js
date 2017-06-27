import React, { Component } from 'react';

import './App.css';
import SvcForm from './components/SvcForm'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Grapher</h2>
        </div>
        <p className="App-intro">
          Upload your CSV and build a graph!
        </p>
        < SvcForm />
      </div>
    );
  }
}

export default App;
