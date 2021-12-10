import { TreeNode } from "./BinarySearchTree";

/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// Iterative - O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const levelNodesLength = queue.length;
    let levelResult: number[] = [];
    for (let i = 0; i < levelNodesLength; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelResult);
  }
  return result;
}

// Recursive - O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder2(
  root: TreeNode | null,
  maxLevel = 1,
  queue: { node: TreeNode; level: number }[] = root
    ? [{ node: root, level: 1 }]
    : [],
  result: number[][] = []
): number[][] {
  if (!queue.length) return [];
  const { node, level } = queue.shift()!;
  if (level > maxLevel) {
    result.push([node.val]);
  } else {
    if (!result[result.length - 1]) result.push([]);
    result[result.length - 1].push(node.val);
  }
  if (node.left) queue.push({ node: node.left, level: level + 1 });
  if (node.right) queue.push({ node: node.right, level: level + 1 });
  levelOrder2(null, level, queue, result);
  return result;
}

export {};
