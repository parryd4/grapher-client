import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
import * as d3 from 'd3'
import TableDisplay from './TableDisplay'
import ScatterDisplay from './ScatterDisplay'

export default class SvcForm extends Component {

  constructor() {
    super()

    this.state = {

    }
    this.handleFiles = this.handleFiles.bind(this)
    this.prepareData = this.prepareData.bind(this)
    this.saveData = this.saveData.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  prepareData(data) {
    let ssv = d3.dsvFormat(";")
    let cleanData
    console.log(typeof data)
    if (typeof data === 'string'){
      cleanData = ssv.parse(data)
      console.log(typeof cleanData)
    } else {
      cleanData = data
    }

    this.setState({
      data: cleanData
    })
  }

  saveData() {
    let data = this.state.data || "test"
    fetch(`http://localhost:3000/api/v1/data_sets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        data_set: {user_id: 1,
          content: JSON.stringify(data)}
      })
    }).then(response => response.json())
    .then(console.log)
    .catch(console.log)
  }

  fetchData() {
    // currently hard coded for first data set
    fetch(`http://localhost:3000/api/v1/data_sets/1`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then(response => response.json())
      .then(this.prepareData)
    // .then(r => console.log(r))

    .catch(console.log)
  }

  handleFiles(files) {

    if (files[0]) {
      new Promise(function(resolve, reject) {
        let reader = new FileReader()
        reader.onload = function(event) {
          resolve(event.target.result)
        }
        reader.readAsText(files[0])
        reader.onerror = reject
      })
    //  .then(res => console.log(typeof res))
      .then(this.prepareData)
      .catch(function(error) {
        console.log(error)
      })
    }

    this.setState({
      filename: files[0].name.split('.')[0]
    })

  }

  render() {
    return (
      <div>

        {this.state.data ? console.log(this.state.data.length) : console.log("no data loaded")}
        {this.state.data ? <ScatterDisplay data={this.state.data} /> : console.log("no data loaded")}

        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>{this.state.filename || 'Select A File To Upload'}</button>
        </ReactFileReader>
        <button onClick={this.saveData}>Submit Data Set</button>
        <button onClick={this.fetchData}>Open the first dataset</button>
        <p id="beware"> </p>
        {/* this is where I suppose I'll use Routes instead of conditional*/}
        {this.state.data ? <TableDisplay tableData={this.state.data}/> : <p>Hi Mom & Dad</p>}

      </div>
    )
  }
}
