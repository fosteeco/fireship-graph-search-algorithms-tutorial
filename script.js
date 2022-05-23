// Represent a graph

// The data
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// can represent in matrix (2 dimensional array filled with ones or zeroes) or adjacency list
// matrix takes up more space but is usually easier to visualize and represent.
// For our data there is not many routes for the number of possible combinations, so the matrix would take up uncessary space.

// map is usually a better option than an object. It behaves more like a regular dictionary or hash map that you would use in other languages
// The Graph
const adjacenyList = new Map();

// Add Node
function addNode(airport) {
  adjacenyList.set(airport, []);
}

// Add Edge, undirected
function addEdge(origin, destination) {
  adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(adjacenyList);
