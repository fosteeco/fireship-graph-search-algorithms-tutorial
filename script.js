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

// BFS Breadth Firts Search

function bfs(start) {
  // Sets are like arrays but all the values in it are unique
  const visited = new Set();

  // to search the graph you have to start somewhere, here we'll start with the PHX node
  // from the starting node, we'll visit all the children and see if any are Bangcock
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); //mutates the queue
    const destinations = adjacenyList.get(airport);

    for (const destination of destinations) {
      console.log(destination);
      if (destination === "BKK") {
        console.log("BFS found Bangkok");
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

bfs("PHX");

// If the only concern is finding a route as quickly as possible a more efficient approach is depth first search

// DFS Depth First Search

function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  let steps = 1;

  const destinations = adjacenyList.get(start);
  for (const destination of destinations) {
    steps++;
    if (destination === "BKK") {
      console.log(`DFS Found Bangkok in ${steps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
