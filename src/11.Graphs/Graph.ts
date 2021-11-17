export class Graph {
  public numberOfNodes: number;
  public adjacentlist: Map<string, Set<string>>;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentlist = new Map<string, Set<string>>();
  }

  // O(1)
  public addVertex(node: string): Graph {
    this.adjacentlist.set(node, new Set<string>());
    this.numberOfNodes++;
    return this;
  }

  // O(1)
  public addEdge(node1: string, node2: string): Graph {
    this.adjacentlist.get(node1)?.add(node2);
    this.adjacentlist.get(node2)?.add(node1);
    return this;
  }

  public toString(): string {
    return `${this.numberOfNodes} NODES\n${Object.entries(
      Object.fromEntries(this.adjacentlist)
    )
      .map(([node, connections]) => `${node} => ${[...connections].join(", ")}`)
      .join("\n")}`;
  }
}
