/**
 *      9
 *   4     20
 * 1  6   15  170
 *
 * DFS 3 ways -
 * in-order: [1,4,6,9,15,20,170] l,m,r
 * pre-order: [9,4,1,6,20,15,170] m,l,r
 * post-order: [1,6,4,15,170,20,9] l,r,m
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

export function dfsInOrder(root: TreeNode, result: number[] = []) {
  if (root.left) dfsInOrder(root.left);
  result.push(root.val);
  if (root.right) dfsInOrder(root.right);
  return result;
}

export function dfsPreOrder(root: TreeNode, result: number[] = []) {
  result.push(root.val);
  if (root.left) dfsPreOrder(root.left);
  if (root.right) dfsPreOrder(root.right);
  return result;
}

export function dfsPostOrder(root: TreeNode, result: number[] = []) {
  if (root.left) dfsPostOrder(root.left);
  if (root.right) dfsPostOrder(root.right);
  result.push(root.val);
  return result;
}
