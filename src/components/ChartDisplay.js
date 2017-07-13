import React, {Component} from 'react'
import * as d3 from 'd3'

export default class ChartDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentData: props.currentData,
      x: "",
      y: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.buildChart = this.buildChart.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  buildChart() {
    console.log('called')
    // I want to use %s
    let margin = 50
    let width = 700
    let height = 500

    let xCol = this.state.x
    let yCol = this.state.y
    document.getElementById('chartSpace').innerHTML = ""
    let svg = d3.select("#chartSpace")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
    let xValues = this.state.currentData.map( data => +data[xCol])
    let yValues = this.state.currentData.map( data => +data[yCol])

    let x = d3.scaleLinear().range([margin, width - (margin)]).domain(d3.extent(xValues))
    let y = d3.scaleLinear().range([height - margin, margin]).domain(d3.extent(yValues))

    svg.selectAll("circle")
      .data(this.state.currentData)
      .enter().append("circle")
      .attr("cx", function(d){return x(+d[xCol])})
      .attr("cy", function(d){return y(+d[yCol])})
      .attr("r", 5)
      .style("fill", "red")

    svg.append("g")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(d3.axisBottom(x))

    svg.append("text")
      .attr("transform", "translate(" + (width/2) + " ," + (height - (0.25 * margin) ) + ")")
      .style("text-anchor","middle")
      .text(xCol)

    svg.append("g")
      .call(d3.axisLeft(y))
      .attr("transform", "translate(" + margin + " , 0)")

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("x", 0 - (height /2 ))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text(yCol)
  }

  render() {
    return (
      <div>
        <p>Below you can set the axes of the chart with columns from your data.</p>
        <select name="x" onChange={this.handleChange} value={this.state.x}>
          <option value="">Select X</option>
          {Object.keys(this.state.currentData[0]).map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <select name="y" onChange={this.handleChange} value={this.state.y}>
          <option value="">Select Y</option>
          {Object.keys(this.state.currentData[0]).map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div id="chartSpace">
          {this.state.x === "" || this.state.y === "" ? null : this.buildChart()}
        </div>
      </div>
    )
  }
}
