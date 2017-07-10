import React, { Component } from 'react'
import * as d3 from 'd3'

class TableDisplay extends Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     currentData: props.currentData
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log("tabledisplay")
  //   console.log(this.props)
  //   console.log("and then")
  //   console.log(nextProps)
  //   this.setState({
  //     data: nextProps.data
  //   })
  // }
  tableHeadings() {
    let headingsString = ""
    Object.keys(this.props.currentData[0]).forEach(e => headingsString += (`<th>${e}</th>`))
    return headingsString
  }

  render() {
      // Object.keys(data[0]).forEach(e => headings.innerHTML += (`<th>${e}</th>`)) //this lets db data work, above only works for freshly parsed.
      //
      // data.forEach(function(d){
      //   // let insertRows = data.columns.map(c => (`<td>${d[c]}</td>`) )
      //   let insertRows = Object.keys(data[0]).map(c => (`<td>${d[c]}</td>`) )
      //   dataGoesHere.innerHTML += (`<tr> ${insertRows.join(" ")} </tr>`)
      // })


    return (
      <div>
        <p>YO</p>
        <table>
          <tbody id="dataGoesHere" >
            <tr id="headings" dangerouslySetInnerHTML={_html: this.tableHeadings()}>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableDisplay
