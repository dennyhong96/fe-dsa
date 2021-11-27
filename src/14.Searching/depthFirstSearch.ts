/**
 *      9
 *   4     20
 * 1  6   15  170
 *
 * DFS 3 ways -
 * in-order: [1,4,6,9,15,20,170]
 * pre-order: [9,4,1,6,20,15,170]
 * post-order: [1,6,4,15,170,20,9]
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

export function DFSInOrder(root: TreeNode, result: Array<number> = []) {
  if (root.left) DFSInOrder(root.left, result);
  result.push(root.value);
  if (root.right) DFSInOrder(root.right, result);
  return result;
}

export function DFSPreOrder(root: TreeNode, result: Array<number> = []) {
  result.push(root.value);
  if (root.left) DFSPreOrder(root.left, result);
  if (root.right) DFSPreOrder(root.right, result);
  return result;
}

export function DFSPostOrder(root: TreeNode, result: Array<number> = []) {
  if (root.left) DFSPostOrder(root.left, result);
  if (root.right) DFSPostOrder(root.right, result);
  result.push(root.value);
  return result;
}
