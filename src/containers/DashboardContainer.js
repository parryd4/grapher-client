import React, { Component } from 'react'

import { DataAdapter } from '../adapters'

import LoadData from '../components/LoadData'
import DataDisplay from '../components/DataDisplay'
import ChartDisplay from '../components/ChartDisplay'

export default class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentData: {},
      viewType: "Table"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleData = this.handleData.bind(this)
    this.saveData = this.saveData.bind(this)
  }

  handleChange(e) {
    if (e.target.type === "radio") {
      this.setState({
        viewType: e.target.value
      })
    } else {
      var currentData = {...this.state.currentData}
      currentData.fileName = e.target.value
      console.log(currentData)
      this.setState({currentData})
      // this.setState({
      //   [e.target.name]: e.target.value
      // })
    }
  }

  handleData(data) {
    this.setState({
      currentData: data
    })
  }

  saveData() {
    // console.log(localStorage.user)
    DataAdapter.create(this.state.currentData)
    console.log(this.state.currentData)
    // console.log(this.state.fileName)
  }

  render() {
    console.log('state')
    console.log(this.state)
    return (
      <div>
        <LoadData handleData={this.handleData} />

        <div className="dataDisplay">
        { this.state.currentData.content ?
          <div>
          <p>By default, data is represented in a Table. Select how you would like your data displayed below. Click the button below to save your chart or data.</p>

          { this.state.currentData.user_id == localStorage.id ? <input type="text" name="fileName" value={this.state.currentData.fileName} onChange={this.handleChange} /> : <h2>{this.state.currentData.fileName}</h2> }
          <br />
          <div className="chooseDataDisplay">
            <label>
              <input type="radio" value="Table" checked={this.state.viewType === "Table"} onChange={this.handleChange} />
              Table
            </label>
            <label>
              <input type="radio" value="Scatter" checked={this.state.viewType === "Scatter"} onChange={this.handleChange} />
              Scatter Plot
            </label>
            <button onClick={this.saveData}>Submit Data Set</button>
          </div>
          <br />
          { this.state.currentData.content && this.state.viewType === "Table" ? <DataDisplay currentData={this.state.currentData}/> : null}
          { this.state.currentData.content && this.state.viewType === "Scatter" ? <ChartDisplay currentData={this.state.currentData}/> : null}
          </div> : "You have no data loaded. Please upload your own or choose a set from the left."}
        </div>
      </div>
    )
  }
}
