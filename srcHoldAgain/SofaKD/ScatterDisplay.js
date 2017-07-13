import React, { Component } from 'react'
import * as d3 from 'd3'

export default class ScatterDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
      x: props.x,
      y: props.y
    }
  }


  componentWillReceiveProps(nextProps) {
    console.log("tabledisplay")
    console.log(this.props)
    console.log("and then")
    console.log(nextProps)
    this.setState({
      data: nextProps.data,
      x: nextProps.x,
      y: nextProps.y
    })
  }

  componentDidMount() {
 //    d3.select("h3").text("different")
 //    let margin = 30
 //    let width = 700
 //    let height = 500
 //
 //
 // //    // x is Carbo
 //    // var x = d3.scaleLinear().domain([0, 25]).range([margin, width - margin]);
 //    var x = d3.scaleLinear().range([margin, width - margin]);
 // //    // y is Fiber
 //    // var y = d3.scaleLinear().domain([0, 15]).range([height - margin, margin]);
 //    var y = d3.scaleLinear().range([height - (3*margin), margin]);
 //    var r = d3.scaleLinear().domain([0, 5]).range([0, 15]);
 //
 //
 //    var svg = d3.select("#scatterPlot")
 //     .append("svg")
 //     .attr("width", width)
 //     .attr("height", height)
 //     .append("g").attr("transform","translate(" + margin + "," + margin + ")")
 //
 //
 //     //  this adds columns to the table. Unintentional.
 //       this.state.data.forEach(function(d) {
 //         d.carbo = +d.carbo
 //         d.fiber = +d.fiber
 //        //  d.displacement = +d.displacement
 //       })
 //
 //       x.domain(d3.extent(this.props.data, function(d){return d.carbo}))
 //       y.domain([0, d3.max(this.props.data, function(d){return d.fiber})])
 //
 //       svg.selectAll("circle")
 //         .data(this.props.data)
 //         .enter().append("circle")
 //         .attr("cx", function(d){return x(d.carbo)})
 //         .attr("cy", function(d){return y(d.fiber)})
 //         .attr("r", function(d){return r( Math.sqrt( Math.abs(d.fiber*10/d.carbo)) )})
 //         .style("fill","red")
 //
 //      svg.append("g")
 //          .attr("transform", "translate(0," + (height - 3*margin) + ")")
 //          .call(d3.axisBottom(x));
 //      svg.append("text")
 //          .attr("transform",
 //                "translate(" + (width/2) + " ," + (height-2*margin) + ")")
 //          .style("text-anchor", "middle")
 //          .text("Carbs");
 //
 //      svg.append("g")
 //           .call(d3.axisLeft(y));
 //       // text label for the y axis
 //       svg.append("text")
 //           .attr("transform", "rotate(-90)")
 //           .attr("y", 0 - margin)
 //           .attr("x",0 - (height / 2))
 //           .attr("dy", "1em")
 //           .style("text-anchor", "middle")
 //           .text(this.props.settings.y);
     }


  render() {
    document.getElementById('scatterPlot').innerHTML = ""
    // d3.select("h3").text("different")
    let margin = 30
    let width = 700
    let height = 500


 //    // x is Carbo
    // var x = d3.scaleLinear().domain([0, 25]).range([margin, width - margin]);
    var x = d3.scaleLinear().range([margin, width - (2*margin)]);
 //    // y is Fiber
    // var y = d3.scaleLinear().domain([0, 15]).range([height - margin, margin]);
    var y = d3.scaleLinear().range([height - (3*margin), margin]);
    // var r = d3.scaleLinear().domain([0, 5]).range([0, 15]);


    var svg = d3.select("#scatterPlot")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .append("g").attr("transform","translate(" + margin + "," + margin + ")")

let bob = [this.state.x, this.state.y]

     //  this adds columns to the table. Unintentional.
       this.state.data.forEach(function(d) {

        //  d.carbo = +d.carbo
         d[bob[0]] = +d[bob[0]]
         d[bob[1]] = +d[bob[1]]
        //  d.fiber = +d.fiber
        //  d.displacement = +d.displacement
       })

       x.domain(d3.extent(this.props.data, function(d){return d[bob[0]]}))
       y.domain([0, d3.max(this.props.data, function(d){return d[bob[1]]})])

       svg.selectAll("circle")
         .data(this.props.data)
         .enter().append("circle")
         .attr("cx", function(d){return x(d[bob[0]])})
         .attr("cy", function(d){return y(d[bob[1]])})
         .attr("r", function(d){return 5/*r( Math.sqrt( Math.abs(d[bob[1]]*10/d[bob[0]])) )*/})
         .style("fill","red")

      svg.append("g")
          .attr("transform", "translate(0," + (height - 3*margin) + ")")
          .call(d3.axisBottom(x));
      svg.append("text")
          .attr("transform", "translate(" + (width/2) + " ," + (height-2*margin) + ")")
          .style("text-anchor", "middle")
          .text(this.state.x);

      svg.append("g")
           .call(d3.axisLeft(y));
       // text label for the y axis
       svg.append("text")
           .attr("transform", "rotate(-90)")
           .attr("y", 0 - margin)
           .attr("x",0 - (height / 2))
           .attr("dy", "1em")
           .style("text-anchor", "middle")
           .text(this.state.y);

    // console.log(this.props.data)
    return (
      <div id="notscatterPlot">

        <p>Show me a scatter...</p>
      </div>
    )
  }
}


// I am interested in comparing Fiber to Carbo ratio.
/*

  Id like the user to be able to specify something
  ex: user is curious about "cereals meeting 10:1 carb:fiber ratio, tend to have less sugar/trans/sodium"

  If Fiber > Carbs/10 -- ratio satisfied

  Fiber: height. fiber x30 since max is near 10
  Carbo: width, carbo x20, since max near 23
*/
/*
  Imagine in parent component:      <Graph data={this.props.data} />
  and then one of the props could decide which type of graph.
*/
