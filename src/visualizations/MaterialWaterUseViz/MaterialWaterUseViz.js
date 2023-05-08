import { React, useEffect, useState } from 'react'
import * as d3 from 'd3';
import './MaterialWaterUseViz.css'
import materials from '../../data/materials.json';
import {
    vizMargin, vizSize
} from '../viz_dimensions';


// transition info
const pour_duration = 2000;
const pourTransition = () => {
    return d3.transition().duration(pour_duration).ease(d3.easeCubicInOut);
}
const waterTransition = () => {
    return d3.transition().duration(3000).ease(d3.easeCubicInOut);
}

export default function MaterialWaterUseViz({ width, height, margins }) {
    const [waterPoured, setWaterPoured] = useState(false);


    // constant axis info
    const barX = d3
        .scaleBand()
        .domain(materials.map((d) => d.material))
        // .domain(['Cotton','Wool','Cellulosics','Hemp','Polyamide','Polyester'])
        .range([margins.left, width])
        .padding(0.1)
        .align(0.5);

    const barXAxis = (g) =>
        g
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom().scale(barX));

    const barY = d3
        .scaleLinear()
        .domain([0, d3.max(materials, (d) => d.water_use) + 15])
        .range([height, margins.top]);

    const barYAxis = (g) =>
        g
            .attr("transform", `translate(${margins.left}, 0)`)
            .call(d3.axisLeft().scale(barY));

    // render initial chart
    const render_chart = (data, width, height, margins) => {
        // select the container
        const svg = d3.select('#material-water-svg')
            .attr("width", width + margins.left + margins.right)
            .attr("height", height + margins.top + margins.bottom);

        // add x axis
        svg.append("g").call(barXAxis);
        svg
            .append("text")
            .attr("x", width / 2) // center label
            .attr("y", height + margins.bottom + margins.top - 5)
            .attr("text-anchor", "middle")
            // .attr("font-size", 10)
            .text("Fabric Type");

        // add y axis
        svg.append("g").call(barYAxis);
        svg
            .append("text")
            // .attr("x", vizSize.width / 2) // center label
            // .attr("y", vizSize.height)
            // .attr("font-size", 10)
            .attr(
                "transform",
                `translate(${margins.left / 2}, ${height / 2})rotate(-90)`
            )
            .attr("text-anchor", "middle")
            .text("Water use (Liters per kg of fabric)");
    };

    // render water pouring/bars growing
    const render_bars = (data, height, margins, updateButton) => {
        const svg = d3.select('#material-water-svg');
        // add water pouring
        svg
            .append("g")
            .attr("id", "material-water-pour-group")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("width", d => Math.pow(d.water_use, 0.5))
            .attr("x", d => barX(d.material) + barX.bandwidth() / 2 - Math.pow(d.water_use, 0.5) / 2)
            .attr("height", 10)
            .attr("fill", "lightblue")
            .transition(pourTransition())
            .attr("width", d => Math.pow(d.water_use, 0.5))
            .attr("x", d => barX(d.material) + barX.bandwidth() / 2 - Math.pow(d.water_use, 0.5) / 2)
            .attr("height", height)
            .attr("y", d => 0)
            .attr("fill", "lightblue")
            .transition(pourTransition())
            .attr("x", d => barX(d.material) + barX.bandwidth() / 2 - Math.pow(d.water_use, 0.5) / 2)
            .attr("width", 0)
            .attr("height", 0)
            .attr("y", height)
            .attr("fill", "lightblue");

        // add bars
        svg
            .append("g")
            .attr("id", "material-water-bar-group")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("class", "material-water-bars")
            .attr("id", d => d.material + '-water-bar')
            .attr("width", barX.bandwidth())
            .attr("x", d => barX(d.material))
            .attr("height", 0)
            .attr("y", height)
            .attr("fill", "white")
            .attr("stroke", "transparent")
            .transition(waterTransition())
            .delay((d, i) => {
                return pour_duration / 2 + 100 * i;
            })
            .attr("height", (d) => height - barY(d.water_use))
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
            .attr("y", height - 5)
            .attr("opacity", 0)
            .transition(waterTransition())
            .delay((d, i) => {
                return pour_duration * 1.1 + 100 * i;
            })
            .attr("opacity", 1)
            .attr("y", (d) => barY(d.water_use) - 5)
            .text(d => d.water_use)

        // disable button after one pour
        updateButton(true);

    };

    // initial chart render
    useEffect(() => {
        render_chart(materials, width, height, margins);
    }, []);

    return (
        <>
            <div>MaterialWaterUseViz</div>
            <input
                type='button'
                id="pour-button"
                onClick={() => { render_bars(materials, height, margins, setWaterPoured) }}
                value='Pour Water'
                disabled={waterPoured}
            >
            </input>
            <svg id="material-water-svg">
            </svg>
        </>
    )
}
