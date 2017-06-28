import React, { Component } from 'react'
import * as d3 from 'd3'

export default class TableDisplay extends Component {
  constructor(){
    super()

  }

  componentDidMount() {
    // both these things work with "something passes through" and renderreturning this.state.filename
    console.log('mounted')
    console.log(this.props.tableData)

  }
  /*
  let space = document.getElementsByClassName("test")[0]
  let tbody = document.getElementById("dataHolder")

  // headings.forEach(e => space.innerHTML += (`<th>${e}</th>`))
  data.columns.forEach(e => space.innerHTML += (`<th>${e}</th>`))

  data.forEach(function(d){

    let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
    tbody.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
  })

  */
  render() {
    return (
      <div>
      <p>{this.props.tableData}</p>
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
