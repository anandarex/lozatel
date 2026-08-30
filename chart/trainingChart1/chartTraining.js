import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function Treemap({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.attr("width", width)
            .attr("height", height)
            .style("border", "1px solid cyan");
    }, [width, height]);

    useEffect(() => {
        draw();
    }, [data, width, height]);

    const draw = () => {
      const svg = d3.select(ref.current);
      svg.selectAll("*").remove();

      if (!data || !data.children || data.children.length === 0) {
        return;
      }

      // Give the data to this cluster layout:
      const root = d3.hierarchy(data).sum((d) => d.value || 0);

      // initialize treemap
      d3.treemap()
          .size([width, height])
          .paddingTop(28)
          .paddingRight(7)
          .paddingInner(3)(root);
      
      const color = d3.scaleOrdinal()
          .domain(["Guards", "Forwards", "Centers", "Top"])
          .range([ "#ff71ce", "#01cdfe", "#fffb96", "#05ffa1"]);

      const opacity = d3.scaleLinear()
          .domain([10, 30])
          .range([.5,1]);

      const leaves = root.leaves();

      svg.selectAll("rect")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => enter.append("rect")
              .attr("x", (d) => d.x0)
              .attr("y", (d) => d.y0)
              .attr("width", (d) => d.x1 - d.x0)
              .attr("height", (d) => d.y1 - d.y0)
              .style("stroke", "black")
              .style("fill", (d) => color(d.parent.data.name))
              .style("opacity", (d) => opacity(d.data.value)),
            (update) => update
              .transition()
              .duration(300)
              .attr("x", (d) => d.x0)
              .attr("y", (d) => d.y0)
              .attr("width", (d) => d.x1 - d.x0)
              .attr("height", (d) => d.y1 - d.y0)
              .style("opacity", (d) => opacity(d.data.value))
              .style("fill", (d) => color(d.parent.data.name)),
            (exit) => exit.remove()
          );

      svg.selectAll(".label")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => enter.append("text")
              .attr("class", "label")
              .attr("x", (d) => d.x0 + 5)
              .attr("y", (d) => d.y0 + 20)
              .text((d) => d.data.name.replace('mister_',''))
              .attr("font-size", "19px")
              .attr("fill", "white"),
            (update) => update
              .attr("x", (d) => d.x0 + 5)
              .attr("y", (d) => d.y0 + 20)
              .text((d) => d.data.name.replace('mister_','')),
            (exit) => exit.remove()
          );

      svg.selectAll(".value")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => enter.append("text")
              .attr("class", "value")
              .attr("x", (d) => d.x0 + 5)
              .attr("y", (d) => d.y0 + 35)
              .text((d) => d.data.value)
              .attr("font-size", "11px")
              .attr("fill", "white"),
            (update) => update
              .attr("x", (d) => d.x0 + 5)
              .attr("y", (d) => d.y0 + 35)
              .text((d) => d.data.value),
            (exit) => exit.remove()
          );

      svg.selectAll(".parent-title")
          .data(root.descendants().filter((d) => d.depth === 1), (d) => d.data.name)
          .join(
            (enter) => enter.append("text")
              .attr("class", "parent-title")
              .attr("x", (d) => d.x0)
              .attr("y", (d) => d.y0 + 21)
              .text((d) => d.data.name)
              .attr("font-size", "19px")
              .attr("fill", (d) => color(d.data.name)),
            (update) => update
              .attr("x", (d) => d.x0)
              .attr("y", (d) => d.y0 + 21)
              .text((d) => d.data.name),
            (exit) => exit.remove()
          );

      svg.append("text")
          .attr("x", 700)
          .attr("y", 20)
          .text("Celtics")
          .attr("font-size", "20px")
          .attr("fill", "white");
    }

    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default Treemap;