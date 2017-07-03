import React, { Component } from 'react';

import './App.css';
import DataContainer from './containers/DataContainer'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Grapher</h2>
        </div>
        <h3 className="App-intro">
          Upload your CSV and build a graph!
        </h3>
        < DataContainer />
      </div>
    );
  }
}

export default App;
