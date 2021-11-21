import { BinarySearchTree } from "../10.Trees/BinarySearchTree";
import { breadthFirstSearch } from "./breadthFirstSearch";

export async function SearchingAlgorithm() {
  const bst = new BinarySearchTree(9);
  bst.insert(6);
  bst.insert(12);
  bst.insert(1);
  bst.insert(4);
  bst.insert(34);
  bst.insert(45);
  // console.log(JSON.stringify(bst, null, 2));

  console.log(breadthFirstSearch(bst.root!, 34));
}

//If you know a solution is not far from the root of the tree:
// BFS - Search the closest node to the parent first

//If the tree is very deep and solutions are rare:
// BFS - DFS will take a long time with this kind of tree (BFS does require extra memory)

//If the tree is very wide:
// DFS - BFS will require too much extra memory, every child node will need to be put into a queue

//If solutions are frequent but located deep in the tree:
// DFS

//Determining whether a path exists between two nodes:
// DFS

//Finding the shortest path:
// BFS
