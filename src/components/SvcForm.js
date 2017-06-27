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
    // this.setState({ filename: files[0].name.split('.')[0] })
    let reader = new FileReader()
    reader.onload = function(e) {

      let allData = reader.result
      let rows = reader.result.split('\n')
      // rows.forEach(e => console.log(e) )
      let headings = rows[0].split(';')


      // https://github.com/d3/d3-dsv
      let ssv = d3.dsvFormat(";")
      let data = ssv.parse(allData)

      // let data = d3.csvParse(allData)
      // console.log(data)

      let space = document.getElementsByClassName("test")[0]
      let tbody = document.getElementById("dataHolder")
      console.log(tbody)
      // headings.forEach(e => space.innerHTML += (`<th>${e}</th>`))
      data.columns.forEach(e => space.innerHTML += (`<th>${e}</th>`))

      data.forEach(function(d){

        let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
        tbody.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
      })


    }

    reader.readAsText(files[0])
    this.setState({
      filename: files[0].name.split('.')[0]
    })
  }

  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>'Select A File To Upload'</button>
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
