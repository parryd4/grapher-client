import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader'
import * as d3 from 'd3'
export default class SvcForm extends Component {

  constructor() {
    super()
    this.state = {

    }
    this.handleFiles = this.handleFiles.bind(this)
  }

  handleFiles(files) {
    console.log(files[0].name.split('.')[0])
    let reader = new FileReader()
    reader.onload = function(e) {
    //   // console.log(e)
    //   // let rows = reader.result.split('\n')
    //   // rows.forEach(e => console.log(e) )
    //   // console.log(rows[0])
    //   // console.log(files.name)
    // }
    reader.readAsText(files[0])
    // d3.csv(files[0],function(csv){
    //
    // })
  }

  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>{this.state.filename || 'Select A File To Upload'}</button>
        </ReactFileReader>
        <div className="test">
        </div>
      </div>
    )
  }
}
