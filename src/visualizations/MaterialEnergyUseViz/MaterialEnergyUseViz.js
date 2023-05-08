import { React, useEffect, useState } from 'react'
import * as d3 from 'd3';
import './MaterialEnergyUseViz.css'
import materials from '../../data/materials.json';
import {
    vizMargin, vizSize
} from '../viz_dimensions';


// transition info
const bar_duration = 3000;
const pulse_duration = 1500;
const pulseTransition = () => {
    return d3.transition().duration(pulse_duration).ease(d3.easeCubicInOut);
}
const barTransition = () => {
    return d3.transition().duration(bar_duration).ease(d3.easeCubicInOut);
}

// constant axis info
const barX = d3
    .scaleBand()
    // .domain(materials.map((d) => d.material))
    .domain(['Polyamide', 'Wool', 'Polyester', 'Cellulosics', 'Cotton', 'Hemp',])
    .range([vizMargin.left, vizSize.width])
    .padding(0.1)
    .align(0.5);

const barXAxis = (g) =>
    g
        .attr("transform", `translate(0, ${vizSize.height})`)
        .call(d3.axisBottom().scale(barX));

const barY = d3
    .scaleLinear()
    .domain([0, d3.max(materials, (d) => d.energy_consumption) + 15])
    .range([vizSize.height, vizMargin.top]);

const barYAxis = (g) =>
    g
        .attr("transform", `translate(${vizMargin.left}, 0)`)
        .call(d3.axisLeft().scale(barY));

// render initial chart
const render_chart = (data) => {
    // select the container
    const svg = d3.select('#material-energy-use-svg')
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
            `translate(${vizMargin.left / 2}, ${vizSize.height / 2})rotate(-90)`
        )
        .attr("text-anchor", "middle")
        .text("Energy use (KwH per kg of fabric)");
};

// render energy bars growing
const render_bars = (data, updateButton) => {
    const svg = d3.select('#material-energy-use-svg');

    // add bars
    svg
        .append("g")
        .attr("id", "material-energy-bar-group")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", "material-energy-bars")
        .attr("id", d => d.material + '-energy-bar')
        .attr("width", 0)
        .attr("x", d => barX(d.material) + barX.bandwidth() / 2)
        .attr("height", (d) => vizSize.height - barY(d.energy_consumption))
        // .attr("y", vizSize.height)
        .attr("y", (d) => barY(d.energy_consumption))
        .attr("fill", "white")
        .attr("stroke", "transparent")
        .transition(barTransition())
        .delay((d, i) => {
            return bar_duration / 3 + 100 * i;
        })
        .attr("x", d => barX(d.material))
        .attr("width", barX.bandwidth())
        .attr("height", (d) => vizSize.height - barY(d.energy_consumption))
        // .attr("y", (d) => barY(d.energy_consumption))
        .attr("stroke", "black")
        .attr("fill", "#F0CF65");

    // start pulsing opacity
    let pulse_counter = 0
    const pulse_delay = 6000
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const pulse_opacity = async (pulse_delay) => {
        const mod_2_opacity = (pulse_counter % 2);
        await delay(pulse_delay);
        d3.selectAll(".material-energy-bars")
            .attr('opacity', 1 - mod_2_opacity * 0.5)
            .attr("x", d => barX(d.material) + (barX.bandwidth() * (1 - (1 - mod_2_opacity * 0.1)) / 2))
            .attr("width", barX.bandwidth() * (1 - mod_2_opacity * 0.1))
            .transition(pulseTransition())
            .attr('opacity', mod_2_opacity * 0.5 + 0.5)
            .attr("x", d => barX(d.material) + (barX.bandwidth() * (1 - (mod_2_opacity * 0.1 + 0.9)) / 2))
            .attr("width", barX.bandwidth() * (mod_2_opacity * 0.1 + 0.9));

        pulse_counter += 1
        // console.log('pc', pulse_counter);
        if (pulse_counter < 500) {
            pulse_opacity(1500); // change duration based on mod
            // pulse_opacity(2000/(mod_2_opacity + 1)); // change duration based on mod
        }
    }

    pulse_opacity(pulse_delay);

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
        // .attr("y", vizSize.height - 5)
        .attr("y", (d) => barY(d.energy_consumption) - 5)
        .attr("opacity", 0)
        .transition(barTransition())
        .delay((d, i) => {
            return bar_duration * 1.1 + 100 * i;
        })
        .attr("opacity", 1)
        .text(d => d.energy_consumption)

    // disable button after one pour
    updateButton(true);

};

export default function MaterialEnergyUseViz() {
    const [waterPoured, setWaterPoured] = useState(false);

    // initial chart render
    useEffect(() => {
        render_chart(materials);
    }, []);

    return (
        <>
            <div>MaterialEnergyUseViz</div>
            <input
                type='button'
                id="pour-button"
                onClick={() => { render_bars(materials, setWaterPoured) }}
                value='Use Energy'
                disabled={waterPoured}
            >
            </input>
            <svg id="material-energy-use-svg">
            </svg>
        </>
    )
}
