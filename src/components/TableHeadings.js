import React from 'react'
import { Link } from 'react-router-dom'

export default function TableHeadings(props){


  console.log(props)
  return(
    <tr>
    {props.headers.map(header => <th>{header}</th>)}
    </tr>
  )
}
