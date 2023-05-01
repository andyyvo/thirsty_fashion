import React, {useEffect} from 'react'
import * as d3 from 'd3';

import materials from '../../data/materials.json';
import {
    vizMargin, vizSize
} from '../viz_dimensions';


const render = (data) => {
    const barX = d3
        .scaleBand()
        .domain(data.map((d) => d.material))
        // .domain(['Cotton','Wool','Cellulosics','Hemp','Polyamide','Polyester'])
        .range([vizMargin.left, vizSize.width])
        .padding(0.1);

    const barXAxis = (g) =>
        g
            .attr("transform", `translate(0, ${vizSize.height})`)
            .call(d3.axisBottom().scale(barX));

    const barY = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.water_use) + 15])
        .range([vizSize.height, vizMargin.top]);

    const barYAxis = (g) =>
        g
            .attr("transform", `translate(${vizMargin.left}, 0)`)
            .call(d3.axisLeft().scale(barY));

    // call the container
    const svg = d3.select('#material-water-viz')
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
        .attr("font-family", "sans serif")
        .text("Fabric Type");

    // add y axis
    svg.append("g").call(barYAxis);
    svg
        .append("text")
        // .attr("x", vizSize.width / 2) // center label
        // .attr("y", vizSize.height)
        // .attr("font-size", 10)
        .attr("font-family", "sans serif")
        .attr(
            "transform",
            `translate(${vizMargin.left / 2}, ${vizSize.height / 2})rotate(-90)`
        )
        .attr("text-anchor", "middle")
        .text("Water use (Liters per kg of fabric)");

    // add bars
    svg
        .append("g")
        .attr("id", "bars")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("width", barX.bandwidth())
        .attr("x", (d) => barX(d.material))
        .attr("height", 0)
        .attr("y", vizSize.height)
        .transition()
        .delay((d, i) => {
            return 100 * i;
        })
        .attr("height", (d) => vizSize.height - barY(d.water_use))
        .attr("y", (d) => barY(d.water_use))
        .attr("stroke", "black")
        .attr("fill", "lightblue");

    // add numbers
    svg
        .append("g")
        .attr("id", "numbers")
        .selectAll(".water-use-text")
        .data(data)
        .join("text")
        .attr('class', 'water-use-text')
        .attr("text-anchor", "middle")
        .attr("x", (d) => barX(d.material) + barX.bandwidth() / 2)
        .attr("y", vizSize.height - 5)
        .transition()
        .delay((d, i) => {
            return 100 * i;
        })
        .attr("y", (d) => barY(d.water_use) - 5)
        .text(d => d.water_use)
}

export default function MaterialWaterUseViz() {

    // initial render
    useEffect(() => {
        render(materials);
    }, []);

    return (
        <>
            <div>MaterialWaterUseViz</div>
            <svg id="material-water-svg">
            </svg>
        </>
    )
}
