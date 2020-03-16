import React from 'react';
import { alphabetData } from '../constants';
import * as d3 from 'd3';

export default class BarGraph extends React.Component {
    constructor() {
        super();
        this.state = {
            canvasHeight : 400,
            canvasWidth : 600,
            sideMargin: 30,
            bottomMargin: 30
        }
    }

    componentDidMount = () => {
        this.drawBarGraph();
    }

    getData = (type) => {
        return alphabetData.map(item => {
            return item[type];
        })
    }

    yAxis = (data) => {
        //const dataName = this.getData('name');
        const scale = d3.scaleLinear()
                  .domain([d3.min(data), d3.max(data)])
                  .range([this.state.canvasHeight, this.state.bottomMargin]);

        // Add scales to axis
        return d3.axisLeft().scale(scale);
    }

    xAxis = (data) => {
        const dataName = this.getData('name');
        const scale = d3.scaleLinear()
                  .domain([0, 26])
                  .range([this.state.sideMargin, this.state.canvasWidth]);

        // Add scales to axis
        return (
            d3.axisBottom(scale)
                .ticks(26)
                .tickFormat(i => dataName[i])
            );
    }

    drawBarGraph = () => {
        const {canvasHeight, canvasWidth, sideMargin, bottomMargin} = this.state;

        const canvas = d3.select(this.refs.graphHolder)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style('border', '1px solid black');
        
        const data = this.getData('value');
        const scale = (canvasHeight-bottomMargin)/d3.max(data);
       
        canvas.append('g')
                .attr("fill", "orange")
            .selectAll('rect')
            .data(data)
            .join('rect')
                .attr("width", (canvasWidth-sideMargin)/data.length - 2)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("x", (datapoint, iteration) => iteration * ((canvasWidth-sideMargin)/data.length) + sideMargin)
                .attr("y", (datapoint) => canvasHeight - (datapoint * scale) - bottomMargin)

       
        canvas.append("g")
            .attr("transform", `translate(${sideMargin}, -${bottomMargin})`)
            .call(this.yAxis(data))

        canvas.append("g")
            .attr("transform", `translate(0, ${canvasHeight - bottomMargin})`)
            .call(this.xAxis(data))
    }
    
    render() {
        return (
            <div>
                <h3>Bar Graph</h3>
                <div ref="graphHolder"/>
            </div>
            
        )
    }
}