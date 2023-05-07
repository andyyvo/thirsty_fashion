import { React, useEffect, useState } from 'react'
import * as d3 from 'd3';
import './CO2EmissionsViz.css'
import CO2 from '../../data/t_shirt_CO2.json';
import {
    vizMargin, vizSize
} from '../viz_dimensions';


// transition info
const smog_duration = 4000;
const pour_duration = 2000;
const pourTransition = () => {
    return d3.transition().duration(pour_duration).ease(d3.easeCubicInOut);
}
const smogTransition = () => {
    return d3.transition().duration(smog_duration).ease(d3.easeCubicInOut);
}
const emissionTransition = () => {
    return d3.transition().duration(pour_duration).ease(d3.easeCubicInOut);
}
const waterTransition = () => {
    return d3.transition().duration(3000).ease(d3.easeCubicInOut);
}

// constant axis info
const barX = d3
    .scaleBand()
    .domain(CO2.map((d) => d.production_type))
    // .domain(['Cotton','Wool','Cellulosics','Hemp','Polyamide','Polyester'])
    .range([vizMargin.left, vizSize.width])
    .padding(0.1)
    .align(0.5);

const barXAxis = (g) =>
    g
        .attr("transform", `translate(0, ${vizSize.height})`)
        .call(d3.axisBottom().scale(barX));

const barY = d3
    .scaleLinear()
    .domain([0, d3.max(CO2, (d) => d.emissions) + 15])
    .range([vizSize.height, vizMargin.top]);

const barYAxis = (g) =>
    g
        .attr("transform", `translate(${vizMargin.left}, 0)`)
        .call(d3.axisLeft().scale(barY));

// render initial chart
const render_chart = (data) => {
    // select the container
    const svg = d3.select('#CO2-emissions-svg')
        .attr("width", vizSize.width + vizMargin.left + vizMargin.right)
        .attr("height", vizSize.height + vizMargin.top + vizMargin.bottom);

    // add x axis
    svg.append("g").call(barXAxis);
    svg
        .append("text")
        .attr("x", vizSize.width / 2) // center label
        .attr("y", vizSize.height + vizMargin.bottom + vizMargin.top - 5)
        .attr("text-anchor", "middle")
        // .attr("font-size", 10)
        .text("Production Phase");

    // add y axis
    svg.append("g").call(barYAxis);
    svg
        .append("text")
        // .attr("x", vizSize.width / 2) // center label
        // .attr("y", vizSize.height)
        // .attr("font-size", 10)
        .attr(
            "transform",
            `translate(${vizMargin.left / 2}, ${vizSize.height / 2})rotate(-90)`
        )
        .attr("text-anchor", "middle")
        .text("Kg per Kg of fabric");
};

// render smog emitting/bars growing
const render_bars = (data, updateButton) => {
    const svg = d3.select('#CO2-emissions-svg');

    // add CO2 smog being emitted
    svg
        .append("g")
        .attr("id", "CO2-emission-smog-group")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", 0)
        .attr("cx", d => barX(d.production_type) + barX.bandwidth() / 2)
        .attr("cy", vizSize.height)
        .attr("opacity", 1)
        .attr("fill", "grey")
        .transition(smogTransition())
        .attr("r", d => Math.pow(d.emissions, 0.6))
        .attr("cx", d => barX(d.production_type) + barX.bandwidth() / 2)
        .attr("cy", (d) =>  barY(d.emissions))
        .attr("fill", "grey")
        .attr("opacity", 0.1);

    // add bars
    svg
        .append("g")
        .attr("id", "CO2-emission-bar-group")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", "CO2-emission-bars")
        .attr("id", d => d.production_type + '-CO2-emission-bar')
        .attr("width", barX.bandwidth())
        .attr("x", d => barX(d.production_type))
        .attr("height", 0)
        .attr("y", vizSize.height)
        .attr("fill", "white")
        .attr("stroke", "transparent")
        .transition(waterTransition())
        // .delay((d, i) => {
        //     return pour_duration / 2 + 100 * i;
        // })
        .attr("height", (d) => vizSize.height - barY(d.emissions))
        .attr("y", (d) => barY(d.emissions))
        .attr("stroke", "black")
        .attr("fill", "grey");

    // add numbers
    svg
        .append("g")
        .attr("id", "numbers")
        .selectAll(".water-use-text")
        .data(data)
        .join("text")
        .attr('class', 'water-use-text')
        .attr("text-anchor", "middle")
        .attr("x", (d) => barX(d.production_type) + barX.bandwidth() / 2)
        .attr("y", vizSize.height - 5)
        .attr("opacity", 0)
        .transition(waterTransition())
        .delay((d, i) => {
            return pour_duration * 1.1 + 100 * i;
        })
        .attr("opacity", 1)
        .attr("y", (d) => barY(d.emissions) - 5)
        .text(d => d.emissions)

    // disable button after one pour
    updateButton(true);

};

export default function CO2EmissionsViz() {
    const [emissions, setEmissions] = useState(false);

    // initial chart render
    useEffect(() => {
        render_chart(CO2);
    }, []);

    return (
        <>
            <div>CO2EmissionsViz</div>
            <input
                type='button'
                id="pour-button"
                onClick={() => { render_bars(CO2, setEmissions) }}
                value='Emit CO2'
            >
            </input>
            <svg id="CO2-emissions-svg">
            </svg>
        </>
    )
}
