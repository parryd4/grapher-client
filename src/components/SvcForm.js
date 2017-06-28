import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader'
import * as d3 from 'd3'
import TableDisplay from './TableDisplay'

export default class SvcForm extends Component {

  constructor() {
    super()
    // trying to use a variable??
    let pleaseWork
    this.state = {

    }
    this.handleFiles = this.handleFiles.bind(this)
    this.prepareData = this.prepareData.bind(this)
  }

  prepareData(data) {
//    console.log(data)
    let ssv = d3.dsvFormat(";")
    let cleanData = ssv.parse(data)
    this.setState({
      data: cleanData
    })
  }

  handleFiles(files) {
    // this.setState({ filename: files[0].name.split('.')[0] })

/* original, no promise
    let reader = new FileReader()

    reader.onload = function(e) {
      console.log(reader)

      let allData = reader.result
      // let rows = reader.result.split('\n')
      // rows.forEach(e => console.log(e) )

      // let headings = rows[0].split(';')

      this.pleaseWork = allData
      console.log(this.pleaseWork)
      // https://github.com/d3/d3-dsv
      let ssv = d3.dsvFormat(";")
      let data = ssv.parse(allData)

      // let data = d3.csvParse(allData)
      // console.log(data)

      let space = document.getElementsByClassName("test")[0]
      let tbody = document.getElementById("dataHolder")

      // headings.forEach(e => space.innerHTML += (`<th>${e}</th>`))
      data.columns.forEach(e => space.innerHTML += (`<th>${e}</th>`))

      data.forEach(function(d){

        let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
        tbody.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
      })
    }

   reader.readAsText(files[0])
*/

    // using Promise to use file info outside of onload
    if (files[0]) {
      new Promise(function(resolve, reject) {
        let reader = new FileReader()
        reader.onload = function(evt) {
          resolve(evt.target.result)
        }
        reader.readAsText(files[0])
        reader.onerror = reject
      })
      .then(this.prepareData)
      .catch(function(err) {
        console.log(err)
      })
    }

    // this.setState({
    //   filename: files[0].name.split('.')[0]
    // })

    console.log( files[0].name.split('.')[0] )
  }

  render() {
    return (
      <div>
        {this.state.filename ? <TableDisplay tableData={this.prepareData(this.pleaseWork)}/> : <p>Hi Mom</p>}
        {/*this.state.filename ? <TableDisplay tableData={"something passes through"}/> : <p>Hi Mom</p>*/}
        {this.state.data ? console.log(this.state.data.length) : console.log("no data loaded")}
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>{this.state.filename || 'Select A File To Upload'}</button>
        </ReactFileReader>

        <div>
          <table>
            <tbody id="dataHolder">
              <tr className="test">
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    )
  }
}
