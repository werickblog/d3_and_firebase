const data = [
  { width: 200, height: 100, fill: "pink" },
  { width: 100, height: 60, fill: "yellow" },
  { width: 80, height: 30, fill: "indigo" }
];

const svg = d3.select("svg");

// Join the data to rects
const rects = svg.selectAll("rect").data(data);

// Append attributes to items already in the dom
rects
  .attr("width", (d, i, n) => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.fill);

// Append attributes to items virtually in the dom
rects
  .enter()
  .append("rect")
  .attr("width", (d, i, n) => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.fill);
