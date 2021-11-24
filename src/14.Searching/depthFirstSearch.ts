/**
 *      9
 *   4     20
 * 1  6   15  170
 *
 * DFS 3 ways -
 * in-order [1,4,6,9,15,20,170]
 * pre-order [9,4,1,6,20,15,170]
 * post-order [1,6,4,15,170,20,9]
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

export function depthFirstSearchInOrder(
  root: TreeNode,
  list: Array<number> = []
) {
  if (root.left) depthFirstSearchInOrder(root.left, list);
  list.push(root.value);
  if (root.right) depthFirstSearchInOrder(root.right, list);
  return list;
}

export function depthFirstSearchPreOrder(
  root: TreeNode,
  list: Array<number> = []
) {
  list.push(root.value);
  if (root.left) depthFirstSearchPreOrder(root.left, list);
  if (root.right) depthFirstSearchPreOrder(root.right, list);
  return list;
}

export function depthFirstSearchPostOrder(
  root: TreeNode,
  list: Array<number> = []
) {
  if (root.left) depthFirstSearchPreOrder(root.left, list);
  if (root.right) depthFirstSearchPreOrder(root.right, list);
  list.push(root.value);
  return list;
}
