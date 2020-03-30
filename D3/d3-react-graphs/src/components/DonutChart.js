import React from 'react';
import { alphabetData as data} from '../constants';
import * as d3 from 'd3';

export default class DonutChart extends React.Component {
    constructor(props) {
        super();
        this.state = {
            radius: 200
        }
    }

    componentDidMount = () => {
        this.drawChart();
    }

    getData = (type) => {
        return data.map(item => {
            return item[type];
        })
    }

    drawChart = () => {
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
        const dataValues = this.getData('value');
        const dataLabels = this.getData('name');
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
        
        var arc = d3.arc()             
            .innerRadius(radius - radius/4)
            .outerRadius(radius)
            .startAngle(data => data.startAngle)
            .endAngle(data => data.endAngle)
        
        const pie = d3.pie();

        const arcs = canvas.selectAll('path')
            .data(pie(dataValues))
            .enter()
                .append("path")
                .attr("d", arc)
                .attr("fill", (d,i) => colorScale(i)); 

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