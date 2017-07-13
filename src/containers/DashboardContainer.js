import React, { Component } from 'react'
import { DataAdapter } from '../adapters'

import LoadData from '../components/LoadData'
import DataDisplay from '../components/DataDisplay'
import ChartDisplay from '../components/ChartDisplay'

export default class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentData: [],
      fileName: "#",
      viewType: "Table"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleData = this.handleData.bind(this)
    this.saveData = this.saveData.bind(this)
    this.setFileName = this.setFileName.bind(this)
  }

  handleChange(e) {
    if (e.target.type === "radio") {
      this.setState({
        viewType: e.target.value
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleData(data) {
    this.setState({
      currentData: data
    })
  }


  saveData(data) {
    console.log(localStorage.user)
    console.log(data)
    console.log(this.state.fileName)
  }


  setFileName(name) {
    this.setState({
      fileName: name
    })
  }



  render() {
    console.log(this.state.fileName)
    // console.log(this.state.currentData.length)
    return (
      <div>
        <LoadData handleData={this.handleData} setFileName={this.setFileName}/>

        <div className="dataDisplay">
          <p>By default, data is represented in a Table. Select how you would like your data displayed below. Click the button below to save your chart or data.</p>

          { this.state.fileName === "#" ? null : <input type="text" name="fileName" value={this.state.fileName} onChange={this.handleChange} /> }

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
          { this.state.currentData.length > 0 ? null : "You have no data loaded. Please upload your own or choose a set from the left."}
          { this.state.currentData.length > 0 && this.state.viewType === "Table" ? <DataDisplay currentData={this.state.currentData}/> : null}
          { this.state.currentData.length > 0 && this.state.viewType === "Scatter" ? <ChartDisplay currentData={this.state.currentData}/> : null}
        </div>
      </div>
    )
  }
}
