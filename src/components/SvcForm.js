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
  }

  prepareData(data) {
    let ssv = d3.dsvFormat(";")
    let cleanData = ssv.parse(data)
    this.setState({
      data: cleanData
    })
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
        {/* this is where I suppose I'll use Routes instead of conditional*/}
        {this.state.data ? <TableDisplay tableData={this.state.data}/> : <p>Hi Mom & Dad</p>}

      </div>
    )
  }
}
