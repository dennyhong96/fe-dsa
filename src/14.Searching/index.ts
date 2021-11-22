import { BinarySearchTree } from "../10.Trees/BinarySearchTree";
import {
  breadthFirstTraversalIt,
  breadthFirstTraversalRe,
} from "./breadthFirstSearch";
import {
  inOrderTraversal,
  postOrderTraversal,
  preOrderTraversal,
} from "./depthFirstSearch";
import { isValidBST } from "./isValidBST";

export async function SearchingAlgorithm() {
  const bst = new BinarySearchTree(9);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(15);
  bst.insert(20);
  bst.insert(170);
  console.log(JSON.stringify(bst, null, 2));

  console.log(breadthFirstTraversalIt(bst.root!));
  console.log(breadthFirstTraversalRe(bst.root!));

  console.log(inOrderTraversal(bst.root!));
  console.log(preOrderTraversal(bst.root!));
  console.log(postOrderTraversal(bst.root!));

  console.log(isValidBST(bst.root!));
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
