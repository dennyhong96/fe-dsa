import { TreeNode } from "./BinarySearchTree";

/**
 * 104. Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

// DFS recursive in order - O(n) time; O(m) space where h is the maximal depth the tree.
function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  // Emulate a stack with array
  const stack: Array<{ node: TreeNode; level: number }> & {
    size: () => number;
  } = [] as any as Array<{ node: TreeNode; level: number }> & {
    size: () => number;
  };
  stack.size = () => stack.length;

  let maxDep = 0;
  stack.push({ node: root, level: 1 });

  while (stack.size() > 0) {
    const { node, level } = stack.pop()!;
    maxDep = Math.max(maxDep, level);
    if (node.right) stack.push({ node: node.right, level: level + 1 });
    if (node.left) stack.push({ node: node.left, level: level + 1 });
  }

  return maxDep;
}

// Iterative BFS - O(n) time; O(n) space
function maxDepth3(root: TreeNode | null): number {
  if (!root) return 0;

  // Emulate a queue with array
  const queue: Array<{ node: TreeNode; level: number }> & {
    enqueue: Function;
    dequeue: Function;
    isEmpty: () => boolean;
  } = [] as any as Array<{ node: TreeNode; level: number }> & {
    enqueue: Function;
    dequeue: Function;
    isEmpty: () => boolean;
  };
  queue.enqueue = queue.push;
  queue.dequeue = queue.shift;
  queue.isEmpty = () => queue.length === 0;

  queue.enqueue({ node: root, level: 1 });
  let maxDep = 0; // root
  while (!queue.isEmpty()) {
    const { node, level } = queue.dequeue()!;
    maxDep = Math.max(maxDep, level);
    if (node.left) queue.enqueue({ node: node.left, level: level + 1 });
    if (node.right) queue.enqueue({ node: node.right, level: level + 1 });
  }

  return maxDep;
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
