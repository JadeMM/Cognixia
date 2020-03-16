import React from 'react';
import { alphabetData as data } from '../constants';
import * as d3 from 'd3';

export default class BarGraph extends React.Component {
    constructor(props) {
        super();
        this.state = {
            radius: 100
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
            .append("svg:svg")             
            .data([data]) 
            .attr("width", width)    
            .attr("height", height)
            .style('border', '1px solid black')
            .append("svg:g")          
                .attr("transform", `translate(${radius},${radius})`)
        
        var arc = d3.arc()              //this will create <path> elements for us using arc data
            .outerRadius(radius);

        var pie = d3.pie()           //this will create arc data for us given a list of values
            .value((d) => d.value);    //we must tell it out to access the value of each element i

        var arcs = canvas.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
            .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
            .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
                .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                    .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
            .attr("fill", "blue") //set the color for each slice to be chosen from the color function defined above
            .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text((d, i) => data[i].label);        //get the label from our original data arr
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