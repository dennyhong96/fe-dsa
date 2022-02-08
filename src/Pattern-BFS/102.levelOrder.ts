import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space;
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const levelNodeCount = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < levelNodeCount; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (levelResult.length) result.push(levelResult);
  }
  return result;
}

export {};
