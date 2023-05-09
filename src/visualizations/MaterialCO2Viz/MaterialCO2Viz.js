import { React, useEffect, useState } from 'react'
import * as d3 from 'd3';
import './MaterialCO2Viz.css'
import materials from '../../data/materials.json';


// transition info
const smog_duration = 4000;
const bar_duration = 3000;
const smog_offset = 500;
const barTransition = () => {
    return d3.transition().duration(bar_duration).ease(d3.easeCubicInOut);
}
const smogTransition = () => {
    return d3.transition().duration(smog_duration).ease(d3.easeLinear);
}
const smogTransition2 = () => {
    return d3.transition().duration(smog_duration * 3 / 2).ease(d3.easeLinear);
}



export default function MaterialCO2Viz({ width, height, margins }) {
    const [waterPoured, setWaterPoured] = useState(false);

    // initial chart render
    useEffect(() => {
        render_chart(materials, width, height, margins);
    }, []);


    // constant axis info
    const barX = d3
        .scaleBand()
        // .domain(materials.map((d) => d.material))
        .domain(['Wool', 'Polyamide', 'Cellulosics', 'Polyester', 'Hemp', 'Cotton'])
        .range([margins.left, width])
        .padding(0.1)
        .align(0.5);

    const barXAxis = (g) =>
        g
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom().scale(barX));

    const barY = d3
        .scaleLinear()
        .domain([0, d3.max(materials, (d) => d.CO2_emission) + 15])
        .range([height, margins.top]);

    const barYAxis = (g) =>
        g
            .attr("transform", `translate(${margins.left}, 0)`)
            .call(d3.axisLeft().scale(barY));

    // render initial chart
    const render_chart = (data, width, height, margins) => {
        // select the container
        const svg = d3.select('#material-CO2-svg')
            .attr("width", width + margins.left + margins.right)
            .attr("height", height + margins.top + margins.bottom);

        // add x axis
        svg.append("g").call(barXAxis);
        svg
            .append("text")
            .attr("x", (width + margins.left) / 2) // center label
            .attr("y", height + margins.bottom + margins.top - 5)
            .attr("text-anchor", "middle")
            // .attr("font-size", 10)
            .text("Fabric Type");

        // add y axis
        svg.append("g").call(barYAxis);
        svg
            .append("text")
            // .attr("x", width / 2) // center label
            // .attr("y", height)
            // .attr("font-size", 10)
            .attr(
                "transform",
                `translate(${margins.left / 2}, ${height / 2})rotate(-90)`
            )
            .attr("text-anchor", "middle")
            .text("CO2 Emissions (kg per kg of fabric)");
    };

    // render water pouring/bars growing
    const render_bars = (data, height, updateButton) => {
        const svg = d3.select('#material-CO2-svg');

        // add static CO2 smog being emitted
        svg
            .append("g")
            .attr("id", "material-CO2-smog-group")
            .selectAll("circle")
            .data(data)
            .join("circle")
            .attr("r", 0)
            .attr("cx", d => barX(d.material) + barX.bandwidth() / 2)
            .attr("cy", height)
            .attr("opacity", 0)
            .attr("fill", "grey")
            .transition(smogTransition())
            .attr("r", d => d.CO2_emission * 2)
            .attr("cx", d => barX(d.material) + barX.bandwidth() / 2)
            .attr("cy", (d) => barY(d.CO2_emission))
            .attr("fill", "grey")
            .attr("opacity", 0.3);

        // add bars
        svg
            .append("g")
            .attr("id", "material-CO2-bar-group")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("class", "material-CO2-bars")
            .attr("id", d => d.material + '-CO2-bar')
            .attr("width", barX.bandwidth())
            .attr("x", d => barX(d.material))
            .attr("height", 0)
            .attr("y", height)
            .attr("fill", "white")
            .attr("stroke", "transparent")
            .transition(barTransition())
            // .delay((d, i) => {
            //     return bar_duration / 2 + 100 * i;
            // })
            .attr("height", (d) => height - barY(d.CO2_emission))
            .attr("y", (d) => barY(d.CO2_emission))
            .attr("stroke", "black")
            .attr("fill", "grey");

        // add continuous CO2 emission animation
        // smog emitting function
        let smog_counter = 0;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const render_smog = async (size) => {
            const smog_size = Math.random() + 1;
            const smog_delay = (Math.random() + 1) * 1500;
            await delay(smog_delay);
            // render smog
            svg
                .append("g")
                .attr("class", "CO2-animated-smog-group")
                .selectAll("circle")
                .data(data)
                .join("circle")
                .attr("r", 0)
                .attr("cx", d => barX(d.material) + barX.bandwidth() / 2)
                .attr("cy", d => barY(d.CO2_emission))
                .attr("opacity", 0.3)
                .attr("fill", "grey")
                .transition(smogTransition2())
                .attr("r", d => Math.pow(d.CO2_emission, 0.5) * 20 * size)
                .attr("cx", d => barX(d.material) + barX.bandwidth() / 2 + 2 * barX.bandwidth())
                .attr("cy", (d) => barY(d.CO2_emission) - smog_offset)
                .attr("fill", "grey")
                .attr("opacity", 0);
            if (smog_counter % 100 == 0) {
                d3.selectAll('.CO2-animated-smog-group')
                    .remove();
            }

            // generate next smog
            // console.log('smog delay, size', smog_counter, smog_delay, smog_size);
            smog_counter += 1;
            if (smog_counter < 500) {
                render_smog(smog_size)
            }
        };
        render_smog(100) // initial call

        // add numbers
        svg
            .append("g")
            .attr("id", "numbers")
            .selectAll(".CO2-use-text")
            .data(data)
            .join("text")
            .attr('class', 'CO2-use-text')
            .attr("text-anchor", "middle")
            .attr("x", (d) => barX(d.material) + barX.bandwidth() / 2)
            .attr("y", height - 5)
            .attr("opacity", 0)
            .transition(barTransition())
            .delay((d, i) => {
                return bar_duration * 0.6 + 100 * i;
            })
            .attr("opacity", 1)
            .attr("y", (d) => barY(d.CO2_emission) - 5)
            .text(d => d.CO2_emission)

        // disable button after one pour
        updateButton(true);

    };

    return (
        <div className='material-svg-div'>
            <input
                type='button'
                id="material-CO2-button"
                onClick={() => { render_bars(materials, height, setWaterPoured) }}
                value='Emit CO2'
                disabled={waterPoured}
            >
            </input>
            <br></br>
            <svg id="material-CO2-svg" className='material-svg'>
            </svg>
        </div>
    )
}
