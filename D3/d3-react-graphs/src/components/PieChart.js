import React from 'react';
import { alphabetData } from '../constants';
import * as d3 from 'd3';

export default class BarGraph extends React.Component {
    constructor(props) {
        super();
        this.state = {
            radius: 200
        }
    }

    componentDidMount = () => {
        const data = this.alterData();
        this.drawChart(data);
    }

    alterData = () => {
        let lessThan1 = 0;
        let count = 0;
        const changeData = alphabetData.map((item) => {
            if(item.value < 0.01) {
                lessThan1 += item.value;
                count++;
                return null
            } else {
                return item;
            }
        })
        changeData[changeData.length] = {name: '', value: lessThan1/count};

        const alteredData = changeData.filter(item => {
            return item !== null? true : false;
        })
        return alteredData;
    }

    getData = (data, type) => {
        return data.map(item => {
            return item[type];
        })
    }

    drawChart = (data) => {
        const {height, width} = this.props;
        const {radius} = this.state;

        const canvas = d3.select(this.refs.canvas)
            .append('svg')     
            .attr("width", width)    
            .attr("height", height)
            .style('border', '1px solid black')
            .append('g')          
                .attr("transform", `translate(${width/2},${height/2})`)

        const pi = Math.PI;
        const dataValues = this.getData(data, 'value');
        const dataLabels = this.getData(data, 'name');
        const colorScale = d3.scaleLinear()
            .domain([0, 25])
            .range([0,1]);
        
        var arc = d3.arc()             
            .innerRadius(0)
            .outerRadius(radius)
            .startAngle(data => data.startAngle)
            .endAngle(data => data.endAngle)
        
        const pie = d3.pie();

        const arcs = canvas.selectAll('path')
            .data(pie(dataValues))
            .enter()
                .append("path")
                .attr("d", arc)
                .attr("fill", (d,i) => d3.interpolateRainbow(colorScale(i))); 

        canvas.selectAll('arcs')
            .data(pie(dataValues))
            .enter()
                .append("text")                                     
                .attr("transform", d  => `translate(${arc.centroid(d)})`)
                .attr("text-anchor", "middle")                          //center the text on it's origin
                .text((d, i) => dataLabels[i]);     
    }
    
    render() {
        return (
            <div>
                <h3>Pie Chart</h3>
                <div ref="canvas"/>
            </div>
            
        )
    }
}