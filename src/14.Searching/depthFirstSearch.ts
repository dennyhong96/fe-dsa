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

export function dfsPreOrder2(root: TreeNode, result: number[] = []) {
  const stack: TreeNode[] = []; // Use a stack to simulate call stack in recursive solution
  stack.push(root);
  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right) stack.push(node.right); // Push right child to stack first
    if (node.left) stack.push(node.left); // Push left child to stack last, so it gets poped out first
  }
  return result;
}

export function dfsPostOrder(root: TreeNode, result: number[] = []) {
  if (root.left) dfsPostOrder(root.left);
  if (root.right) dfsPostOrder(root.right);
  result.push(root.val);
  return result;
}
