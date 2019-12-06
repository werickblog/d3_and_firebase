const data = [
  { width: 200, height: 100, fill: "purple" },
  { width: 100, height: 60, fill: "yellow" },
  { width: 80, height: 30, fill: "pink" },
];

const svg = d3.select("svg");

const rect = svg
  .selectAll("rect")
  .data(data)
  .attr("width", (d, i, n) => {
    return d.width;
  })  
  .attr("height", d => {
    return d.height;
  })
  .attr("fill", d => {
    return d.fill;
  });
