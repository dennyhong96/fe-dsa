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
  return 1 + Math.max(leftMaxDepth, rightMaxDepth); // Add one for the root node
}

// Iterative DFS pre-order - O(n) time; O(n) space
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: Array<{ node: TreeNode; level: number }> = []; // pre-order DFS with a stack is the easiest iterative way to DFS
  let depth = 1;

  stack.push({ node: root, level: 1 });
  while (stack.length) {
    const { node, level } = stack.pop()!;
    depth = Math.max(depth, level);
    if (node.right) stack.push({ node: node.right, level: level + 1 });
    if (node.left) stack.push({ node: node.left, level: level + 1 });
  }

  return depth;
}

// Iterative BFS - O(n) time; O(n) space
function maxDepth3(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: Array<{ node: TreeNode; level: number }> = [];
  let maxDepth = 1;

  queue.push({ node: root, level: 1 });
  while (queue.length) {
    const { node, level } = queue.shift()!;
    maxDepth = Math.max(maxDepth, level);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }

  return maxDepth;
}

function _maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let maxDepth = 1;
  const traverse = (node: TreeNode, depth = 1) => {
    if (node.left) traverse(node.left, depth + 1);
    maxDepth = Math.max(maxDepth, depth);
    if (node.right) traverse(node.right, depth + 1);
  };
  traverse(root);
  return maxDepth;
}
