import React, { Component } from 'react'
import * as d3 from 'd3'

import TableHeadings from './TableHeadings.js'
import TableContents from './TableContents.js'

class TableDisplay extends Component {

  render() {

    return (
      <div>
        <p>YO</p>
        <table style={{border: 1}}>
          <thead>
            <TableHeadings headers={Object.keys(this.props.currentData[0])}/>
          </thead>
          <tbody>
            {this.props.CurrentData.map(d => <TableContents data={d} /> )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableDisplay
