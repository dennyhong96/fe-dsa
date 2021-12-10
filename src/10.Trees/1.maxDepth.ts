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

// O(n) time; O(n) space - Iterative BFS
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

// O(n) time; O(n) space - Iterative BFS 2
function maxDepth4(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: TreeNode[] = [];
  queue.push(root);
  let maxDep = 0;
  while (queue.length) {
    maxDep++;
    const currLevelNodesLength = queue.length;
    for (let i = 0; i < currLevelNodesLength; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return maxDep;
}

export {};
