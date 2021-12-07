import { TreeNode } from "./BinarySearchTree";

/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// Iterative - O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue: TreeNode[] = [];
  const result: number[][] = [];
  queue.push(root);
  while (queue.length) {
    const levelNodesCount = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < levelNodesCount; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (levelResult.length) result.push(levelResult);
  }
  return result;
}

// Recursive - O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder1(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue: { node: TreeNode; level: number }[] = [];
  const result: number[][] = [];
  queue.push({ node: root, level: 1 });
  let currLevel = 0;
  const traverse = () => {
    if (queue.length) {
      const { node, level } = queue.shift()!;
      if (level > currLevel) {
        result.push([node.val]);
        currLevel = level;
      } else {
        result[result.length - 1].push(node.val);
      }
      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
      traverse();
    }
  };
  traverse();
  return result;
}
