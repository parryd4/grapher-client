import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader'
import * as d3 from 'd3'
import { DataAdapter } from '../adapters'

export default class LoadData extends Component {

  constructor() {
    super()

    this.allDataSets = this.allDataSets.bind(this)
    this.handleFiles = this.handleFiles.bind(this)
    this.prepareData = this.prepareData.bind(this)
    this.fetchData = this.fetchData.bind(this)

  }

  prepareData(data) {

    (data.content ? console.log('object!G2G') : console.log('isastring') )
    let ssv = d3.dsvFormat(";")
    let cleanData = {}

    if (!data.content){
      cleanData = {
        user_id: localStorage.id || 0,
        content: ssv.parse(data),
        fileName: this.state.fileName
      }
      console.log('in the if -clean')
      console.log(cleanData)
    } else {
      console.log('in the else. ')
      console.log ( JSON.parse(data.content) )
      data.content = JSON.parse(data.content)
      // console.log ( data )
      cleanData = data
      console.log(cleanData)
    }
    this.props.handleData(cleanData)

  }

  fetchData(e) {

    fetch(`http://localhost:3000/api/v1/data_sets/${e.target.value}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then(response => response.json())
      .then(this.prepareData)
      // .then(console.log)
      .catch(console.log)
  }

  handleFiles(files) {
    if (files[0]) {
      this.setState({
        fileName: files[0].name
      })
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
  }

  allDataSets() {
    DataAdapter.all()
      .then(sets => this.setState({ dataSets: sets}))
  }


  render() {
    // <ul>
    // <li onClick={this.fetchData} value={1}>Open the First dataset</li>
    // <li onClick={this.fetchData} value={2}>Open the Second dataset</li>
    // </ul>
    this.allDataSets()

    return (
      <div className="loadData">
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button>Select A File To Upload</button>
        </ReactFileReader>
        <ul>
          {this.state ? this.state.dataSets.map( (dataSet) => <li value={dataSet.id} onClick={this.fetchData}>{dataSet.file_name}</li>) : <p>sadandempty</p> }
        </ul>
      </div>
    )
  }
}
