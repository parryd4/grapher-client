import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader'
import * as d3 from 'd3'


export default class LoadData extends Component {

  constructor() {
    super()

    this.handleFiles = this.handleFiles.bind(this)
    this.prepareData = this.prepareData.bind(this)
    this.saveData = this.saveData.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  prepareData(data) {
    let ssv = d3.dsvFormat(";")
    let cleanData

    if (typeof data === 'string'){
      cleanData = ssv.parse(data)

    } else {
      cleanData = data
    }
    this.props.handleData(cleanData)

  }

  saveData() {
    this.setState({
      data: []
    })

    // let data = this.state.data || "test"
    // fetch(`http://localhost:3000/api/v1/data_sets`, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     'accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     data_set: {user_id: 1,
    //       content: JSON.stringify(data)}
    //   })
    // }).then(response => response.json())
    // .then(console.log)
    // .catch(console.log)
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
      .then(this.prepareData)
      .catch(function(error) {
        console.log(error)
      })
    }
  }




  render() {

    return (
      <div className="container-fluid">
      <div className="row">
        <p>Get started by uploading your own data or choosing a file</p>
        <div className="col">
          <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button>Select A File To Upload</button>
          </ReactFileReader>
        </div>
        <div className="col">
          <button onClick={this.fetchData} value={1}>Open the First dataset</button>
        </div>
        <div className="col">
          <button onClick={this.fetchData} value={2}>Open the Second dataset</button>
        </div>
      </div>
      </div>
    )
  }
}
