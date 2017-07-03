// import React from 'react'

import React, { Component } from 'react'
import * as d3 from 'd3'

// function TableDisplay(props) {
//   console.log(props.data)
//   return (
//     <div>
//       {props.data.length}
//     </div>
//   )
// }

class TableDisplay extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("tabledisplay")
    console.log(this.props)
    console.log("and then")
    console.log(nextProps)
    this.setState({
      data: nextProps.data
    })
  }

  render() {
    if (document.getElementById("dataGoesHere")){
      document.getElementById("dataGoesHere").innerHTML=""
    }
    console.log(this.state.data.length)
    if ( this.state.data.length !== 0 ) {
      let dataGoesHere = document.getElementById("dataGoesHere")
      dataGoesHere.innerHTML = '<tr id="headings"></tr>'
      let headings = document.getElementById("headings")


      console.log(this.state.data)
      let data = this.state.data
      // debugger
      // data.columns.forEach(e => space.innerHTML += (`<th>${e}</th>`))
      Object.keys(data[0]).forEach(e => headings.innerHTML += (`<th>${e}</th>`)) //this lets db data work, above only works for freshly parsed.

      data.forEach(function(d){
        // let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
        let insertRows = Object.keys(data[0]).map(c => (`<td>${d[c]}</td>`) )
        dataGoesHere.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
      })
    }

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

export default TableDisplay
