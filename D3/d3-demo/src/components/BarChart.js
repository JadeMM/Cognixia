import React from 'react';
import * as d3 from 'd3';

export default class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [ 2, 4, 2, 6, 8 ],
            canvasHeight : 400,
            canvasWidth : 600,
            scale : 20
        }
    }

    componentDidMount = () => {
        this.drawBarChart();
    }

    drawBarChart = () => {
        const {data, canvasHeight, canvasWidth, scale} = this.state;

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")
        
        svgCanvas.selectAll("rect")
            .data(data)
            .enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * 20)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => canvasHeight - datapoint * scale)
    }
    render(){
        return <div ref='canvas'/>
    } 
}