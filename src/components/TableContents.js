import React from 'react'
import { Link } from 'react-router-dom'

export default function TableContents(props){


  console.log(props)
  return(
    <tr>
      {props.data.map(data => <td>{data}</td>)}
    </tr>
  )
}
