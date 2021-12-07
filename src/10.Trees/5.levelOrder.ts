import { TreeNode } from "./BinarySearchTree";

/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// O(n) time; O(n/2) space (https://youtu.be/6ZnyEApgFYg?t=352)
function levelOrder(root: TreeNode | null): number[][] {
  let depth = 0;

  const bfs = (
    root: TreeNode | null,
    queue: Array<{ node: TreeNode; level: number }> = [],
    result: Array<Array<number>> = []
  ): Array<Array<number>> => {
    if (root) queue.push({ node: root, level: 1 });
    if (queue.length) {
      const { node, level } = queue.shift()!;
      if (level > depth) {
        result.push([node.val]);
        depth = level;
      } else {
        result[result.length - 1].push(node.val);
      }
      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
      return bfs(null, queue, result);
    } else {
      return result;
    }
  };

  return bfs(root);
}

// Iterative solution
function levelOrder2(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (levelResult.length) result.push(levelResult);
  }

  return result;
}
