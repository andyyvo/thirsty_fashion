import { React, useEffect, useState } from 'react'
import * as d3 from 'd3';
import './BackgroundWaterFillViz.css'

// render water pouring/bars growing
const render_BG_fill = (height, width, color, duration1, duration2) => {
    const barX = d3
        .scaleBand()
        .domain([0, 1])
        .range([0, width])
        .paddingInner(0)
        .paddingOuter(0);
    console.log('bandwidth', barX.bandwidth())
    const barY = d3
        .scaleLinear()
        .domain([0, 1])
        .range([height, 0]);

    const pourTransition = () => {
        return d3.transition().duration(duration1).ease(d3.easeCubicInOut);
    }
    const waterTransition = () => {
        return d3.transition().duration(duration2).ease(d3.easeCubicInOut);
    }

    const svg = d3.select('#background-water-svg');

    const dummy_data = [{
        x: 1,
        y: 1
    }]

    // add pour line
    svg
        .append("g")
        .attr("id", "BG-water-pour-group")
        .selectAll("rect")
        .data(dummy_data)
        .join("rect")
        .attr("width", height * 0.05)
        .attr("x", d => barX(d.x))
        .attr("height", 10)
        .attr("fill", color)
        .transition(pourTransition())
        .attr("width", height * 0.1)
        .attr("x", d => barX(d.x))
        .attr("height", height)
        .attr("y", 0)
        .attr("fill", color)
        .transition(pourTransition())
        .attr("x", d => barX(d.x))
        .attr("width", 0)
        .attr("height", 0)
        .attr("y", height)
        .attr("fill", color);

    // add water rising
    svg
        .append("g")
        .attr("id", "BG-water-bar-group")
        .selectAll("rect")
        .data(dummy_data)
        .join("rect")
        .attr("id", "background-water-rect")
        // .attr("width", barX.bandwidth())
        .attr("width", width)
        .attr("x", d => barX(0))
        .attr("height", 0)
        .attr("y", height)
        .attr("fill", "white")
        .attr("stroke", "transparent")
        .transition(waterTransition())
        .delay(duration1 * 0.75)
        .attr("height", (d) => height - barY(d.y))
        .attr("y", (d) => barY(d.y))
        // .attr("stroke", "transparent")
        .attr("fill", color);
};

// transition info
const pour_duration = 2000;
const rise_duration = 2000;

export default function BackgroundWaterFillViz({
    height = window.innerHeight,
    width = window.innerWidth,
    color = 'lightblue',
    duration1 = pour_duration,
    duration2 = rise_duration,
}) {
    return (
        <>
            <input
                type='button'
                id="pour-button"
                onClick={() => { render_BG_fill(height, width, color, duration1, duration2) }}
                value='Pour BG Water'
            >
            </input>
            <svg id="background-water-svg" height={height} width={width}>
            </svg>
        </>
    )
}
