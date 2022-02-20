/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

// Iterative - O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue: Array<TreeNode> = [];
  const result: Array<Array<number>> = [];
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    const levelResult: Array<number> = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelResult);
  }
  return result;
}

// Recursive - O(n) time; O(n) space;
function levelOrder1(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  const traverse = (depth = 0) => {
    const levelNodeLength = queue.length;
    if (!levelNodeLength) return;
    for (let i = 0; i < levelNodeLength; i++) {
      const node = queue.shift()!;
      if (result[depth]) {
        result[depth].push(node.val);
      } else {
        result[depth] = [node.val];
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    traverse(depth + 1);
  };
  traverse();
  return result;
}

// Recursive2 - O(n) time; O(n) space;
function levelOrder2(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue: Array<{ node: TreeNode; level: number }> = [];
  const result: Array<Array<number>> = [[]];
  queue.push({ node: root, level: 1 });
  let depth = 1; // root
  const traverse = (): Array<Array<number>> => {
    if (!queue.length) return result;
    const { node, level } = queue.shift()!;
    if (level > depth) {
      const levelResult = [node.val];
      result.push(levelResult);
      depth = level;
    } else {
      result[result.length - 1].push(node.val);
    }
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
    return traverse();
  };
  return traverse();
}

export {};
