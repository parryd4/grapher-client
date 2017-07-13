import React from 'react'

export default function DataDisplay(props) {
  const columns = Object.keys(props.currentData.content[0])
  // console.log(columns)
  let i = 0
  const row = props.currentData.content.map( (data) => <tr key={i++}>{columns.map( (col) => (<td key={i++} >{data[col]}</td>) )}</tr>)

  return (
    <div>
      <table>
        <thead>
          <tr>{columns.map(col => <th key={col}>{col}</th>)}</tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    </div>
  )
}
