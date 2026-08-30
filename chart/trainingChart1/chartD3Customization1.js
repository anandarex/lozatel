import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function Treemap({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.attr("width", width)
            .attr("height", height)
            .style("border", "1px solid rgba(34, 211, 238, 0.7)")
            .style("border-radius", "12px")
            .style("background", "#071827")
            .style("box-shadow", "0 12px 30px rgba(0, 0, 0, 0.15)");
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
          .paddingRight(4)
          .paddingLeft(4)
          .paddingInner(4)
          .paddingBottom(16)(root);
      
      const color = d3.scaleOrdinal()
          .domain(["Live Animals", "Vegetables", "Animal Fats", "Prepared Foodstuffs", "Mineral", "Chemical", 
          "Plastics", "Raw Hides", "Wood", "Pulp of Wood", "Textiles", "Footwear", "Articles of Stone", 
          "Natural or Cultured Pearls", "Metals", "Machinery", "Vehicles", "Optical", "Arms", "Miscellaneous Manufactured",
          "Works of Art"])
          .range([ "#ff71ce", "#01cdfe", "#05ffa1", "#b967ff", "#ccc53b","#3a34ff",
          "#6662ff","#928fff","#00c0c2","#00e7ea","#3afdff","#ff67c0","#ed87c3",
          "#f3e961","#6e1800","#f33400","#ff3439","#ff777b","#ffea2b","#fff172","#7f25ba"
        ]);

      const opacity = d3.scaleLinear()
          .domain([10, 30])
          .range([.5,1]);

      const formatValue = d3.format(",.2f");
      const leaves = root.leaves();

      svg.append("rect")
        .attr("class", "background")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#071827");

      svg.selectAll("rect.tile")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => {
              const rect = enter.append("rect")
                .attr("class", "tile")
                .attr("x", (d) => d.x0)
                .attr("y", (d) => d.y0)
                .attr("width", (d) => d.x1 - d.x0)
                .attr("height", (d) => d.y1 - d.y0)
.style("stroke", "rgba(255,255,255,0.5)")
                .style("stroke-width", "1.2")
                .style("fill", (d) => color(d.parent.data.name))
                .style("opacity", (d) => opacity(d.data.value));

              rect.append("title")
                .text((d) => `${d.parent.data.name}: ${formatValue(d.data.value)}`);

              return rect;
            },
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

      svg.selectAll(".tile-label")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => enter.append("text")
              .attr("class", "tile-label")
              .attr("x", (d) => d.x0 + 6)
              .attr("y", (d) => d.y0 + 15)
              .style("font-size", (d) => (d.x1 - d.x0) > 120 && (d.y1 - d.y0) > 35 ? "12px" : "9px")
              .style("font-weight", "600")
              .style("fill", "white")
              .style("pointer-events", "none")
              .attr("dominant-baseline", "hanging")
              .text((d) => {
                const width = d.x1 - d.x0;
                const height = d.y1 - d.y0;
                if (width < 70 || height < 22) return "";
                return d.data.name.replace('mister_',' ').slice(0, width > 120 ? 24 : 12);
              }),
            (update) => update
              .attr("x", (d) => d.x0 + 6)
              .attr("y", (d) => d.y0 + 15)
              .style("font-size", (d) => (d.x1 - d.x0) > 120 && (d.y1 - d.y0) > 35 ? "12px" : "9px")
              .text((d) => {
                const width = d.x1 - d.x0;
                const height = d.y1 - d.y0;
                if (width < 70 || height < 22) return "";
                return d.data.name.replace('mister_',' ').slice(0, width > 120 ? 24 : 12);
              }),
            (exit) => exit.remove()
          );

      svg.selectAll(".tile-value")
          .data(leaves, (d) => d.data.name)
          .join(
            (enter) => enter.append("text")
              .attr("class", "tile-value")
              .attr("x", (d) => d.x0 + 6)
              .attr("y", (d) => d.y0 + 32)
              .style("font-size", (d) => (d.x1 - d.x0) > 100 && (d.y1 - d.y0) > 35 ? "11px" : "8px")
              .style("fill", "rgba(255,255,255,0.95)")
              .style("pointer-events", "none")
              .attr("dominant-baseline", "hanging")
              .text((d) => {
                const width = d.x1 - d.x0;
                const height = d.y1 - d.y0;
                if (width < 90 || height < 28) return "";
                return formatValue(d.data.value);
              }),
            (update) => update
              .attr("x", (d) => d.x0 + 6)
              .attr("y", (d) => d.y0 + 32)
              .style("font-size", (d) => (d.x1 - d.x0) > 100 && (d.y1 - d.y0) > 35 ? "11px" : "8px")
              .text((d) => {
                const width = d.x1 - d.x0;
                const height = d.y1 - d.y0;
                if (width < 90 || height < 28) return "";
                return formatValue(d.data.value);
              }),
            (exit) => exit.remove()
          );

      svg.append("text")
          .attr("x", width / 2)
          .attr("y", 22)
          .attr("text-anchor", "middle")
          .text("Komoditi Ekspor Indonesia")
          .attr("font-size", "20px")
          .attr("font-weight", "700")
          .attr("fill", "rgba(255,255,255,0.95)");
    }

    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default Treemap;