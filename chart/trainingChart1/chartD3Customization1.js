import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function Treemap({ width, height, data }){
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid cyan")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
      const svg = d3.select(ref.current);

      // Give the data to this cluster layout:
      var root = d3.hierarchy(data).sum(function(d){ return d.value});

      // initialize treemap
      d3.treemap()
          .size([width, height])
          .paddingTop(15)
          .paddingRight(2)
          .paddingLeft(2)
          .paddingInner(3)
          .paddingBottom(7)
          (root);
      
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


      // Select the nodes
      var nodes = svg
                  .selectAll("rect")
                  .data(root.leaves())


      //animate new additions
      nodes
            .transition().duration(300)
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("opacity", function(d){ return opacity(d.data.value)})
                .style("fill", function(d){ return color(d.parent.data.name)} )


      // draw rectangles
      nodes.enter()
          .append("rect")
          .attr('x', function (d) { return d.x0; })
          .attr('y', function (d) { return d.y0; })
          .attr('width', function (d) { return d.x1 - d.x0; })
          .attr('height', function (d) { return d.y1 - d.y0; })
          .style("stroke", "black")
          .style("fill", function(d){ return color(d.parent.data.name)} )
          .style("opacity", function(d){ return opacity(d.data.value)})

        //tambahan untuk simple tooltips
          .append("title")
          .text((d) => `${d.parent.data.name} in : ${d.value}` );
        //end

      nodes.exit().remove()
 
      // select node titles
      var nodeText = svg
          .selectAll("text")
          .data(root.leaves())

      // add the text
      nodeText.enter()
          .append("text")
          .attr("x", function(d){ return d.x0+1})    // +10 to adjust position (more right)
          .attr("y", function(d){ return d.y0+15})    // +20 to adjust position (lower)
          .text(function(d){ return d.data.name.replace('mister_',' ') })
          .attr("font-size", "12px")
          .attr("fill", "white")

        //   nodeText.enter()
        //   .append("text")
        //   .attr("x", function(d){ return d.x0+350})    // +10 to adjust position (more right)
        //   .attr("y", function(d){ return d.y0+100})    // +20 to adjust position (lower)
        //   .text(function(d){ return d.data.name.replace('mister_',' ') })
        //   .attr("font-size", "100px")
        //   .attr("fill", "white")
      
      // select node titles
      var nodeVals = svg
          .selectAll("vals")
          .data(root.leaves())  

      // add the values
      nodeVals.enter()
          .append("text")
          .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
          .attr("y", function(d){ return d.y0+40})    // +20 to adjust position (lower)
          .text(function(d){ return d.data.value })
          .attr("font-size", "12px")
          .attr("fill", "white")
    // nodeVals.enter()
    //       .append("text")
    //       .attr("x", function(d){ return d.x0+250})    // +10 to adjust position (more right)
    //       .attr("y", function(d){ return d.y0+200})    // +20 to adjust position (lower)
    //       .text(function(d){ return d.data.value })
    //       .attr("font-size", "70px")
    //       .attr("fill", "white")
  
      // add the parent node titles
    //   svg
    //   .selectAll("titles")
    //   .data(root.descendants().filter(function(d){return d.depth==1}))
    //   .enter()
    //   .append("text")
    //       .attr("x", function(d){ return d.x0})
    //       .attr("y", function(d){ return d.y0+21})
    //       .text(function(d){ return d.data.name })
    //       .attr("font-size", "20px")
    //       .attr("fill",  function(d){ return color(d.data.name)} )
  
      // Add the chart heading
      svg
      .append("text")
          .attr("x", 350)
          .attr("y", 20)    // +20 to adjust position (lower)
          .text("Komoditi Ekspor Indonesia")
          .attr("font-size", "20px")
          .attr("fill",  "white" )

    }

    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default Treemap;