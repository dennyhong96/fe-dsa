import { Graph } from "./Graph";

export async function GraphDataStructure() {
  const graph = new Graph();
  graph.addVertex("0");
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  graph.addVertex("5");
  graph.addVertex("6");
  graph.addEdge("0", "1");
  graph.addEdge("0", "2");
  graph.addEdge("1", "2");
  graph.addEdge("1", "3");
  graph.addEdge("3", "4");
  graph.addEdge("2", "4");
  graph.addEdge("4", "5");
  graph.addEdge("5", "6");
  console.log(graph.toString());
}
