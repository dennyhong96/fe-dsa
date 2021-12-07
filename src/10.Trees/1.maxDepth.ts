import { TreeNode } from "./BinarySearchTree";

/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

// DFS recursive in order - O(n) time; O(m) space where h is the maximal depth the tree.
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
}

// O(n) time; O(n) space, Iterative DFS Pre-order
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;
  const stack: { node: TreeNode; level: number }[] = [];
  stack.push({ node: root, level: 1 });
  let maxDep = 0;
  while (stack.length) {
    const { node, level } = stack.pop()!;
    maxDep = Math.max(maxDep, level);
    if (node.right) stack.push({ node: node.right, level: level + 1 });
    if (node.left) stack.push({ node: node.left, level: level + 1 });
  }
  return maxDep;
}

// O(n) time; O(n) space - Iterative BFS
function maxDepth3(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: { node: TreeNode; level: number }[] = [];
  let maxDep = 0;
  queue.push({ node: root, level: 1 });
  while (queue.length) {
    const { node, level } = queue.shift()!;
    maxDep = Math.max(maxDep, level);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  return maxDep;
}
