/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

// DFS recursive preorder - O(n) time; O(h) space where h is the height the tree
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth); // The larger subtree height out of two sides + 1
}

// Iterative DFS preorder - O(n) time; O(n) space
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;
  const stack: { node: TreeNode; depth: number }[] = [];
  stack.push({ node: root, depth: 1 });
  let maxDep = 0;
  while (stack.length) {
    const { node, depth } = stack.pop()!;
    maxDep = Math.max(maxDep, depth);
    if (node.right) stack.push({ node: node.right, depth: depth + 1 });
    if (node.left) stack.push({ node: node.left, depth: depth + 1 });
  }
  return maxDep;
}

// Iterative BFS - O(n) time; O(n) space
function maxDepth3(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: { node: TreeNode; depth: number }[] = [];
  queue.push({ node: root, depth: 1 });
  let maxDep = 0;
  while (queue.length) {
    const { node, depth } = queue.shift()!;
    maxDep = Math.max(maxDep, depth);
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
  return maxDep;
}
