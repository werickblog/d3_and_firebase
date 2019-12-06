/**
 * What d3.select does is wrap the first div with a
 * Selection object  which is returned and
 * is assigned to the assigned variable
 */

const canvas = d3.select(".canvas");

/**
 * Append a new element in the wrapped element
 */
const svg = canvas.append("svg");

// Add attributes to the svg element
svg.attr("height", 600);
svg.attr("width", 600);

// Create a group wrapper
const group = svg
  .append("g")
  // Move the grouped vectors along the x and y axis
  .attr("transform", "translate(0, 100)");

// Append shapes into the svg tag
group
  .append("rect")
  .attr("height", 200)
  .attr("width", 100)
  .attr("fill", "pink")
  .attr("x", 20)
  .attr("y", 40);
group
  .append("circle")
  .attr("r", 60)
  .attr("cx", 70)
  .attr("cy", 100)
  .attr("fill", "indigo");
group
  .append("line")
  .attr("x1", 20)
  .attr("y1", 40)
  .attr("x2", 120)
  .attr("y2", 240)
  .attr("stroke", "blue")
  .attr("stroke-width", 3);
group
  .append("text")
  .attr("x", 20)
  .attr("y", 40)
  .attr("fill", "black")
  .text("hello world! climate change is real")
  .style("font-family", "arial");
