import React, { Component } from 'react'
import * as d3 from 'd3'

export default class TableDisplay extends Component {
  constructor(){
    super()

  }

  componentDidMount() {

    let space = document.getElementById("headings")
    let tbody = document.getElementById("dataGoesHere")
    let data = this.props.tableData
    // debugger
    // data.columns.forEach(e => space.innerHTML += (`<th>${e}</th>`))
    Object.keys(data[0]).forEach(e => space.innerHTML += (`<th>${e}</th>`))

    data.forEach(function(d){
      // let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
      let insertRows = Object.keys(data[0]).map(c => (`<td>${d[c]}</td>`) )
      tbody.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
    })

  }

  render() {
    return (
      <div>
        <table>
          <tbody id="dataGoesHere">
            <tr id="headings">
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
