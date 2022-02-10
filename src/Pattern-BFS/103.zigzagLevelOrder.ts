import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(1) space;
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  let queue: TreeNode[] = [root];

  while (queue.length) {
    const len = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelResult.push(node.val);
    }
    if (result.length % 2 === 1) {
      levelResult.reverse();
    }
    result.push(levelResult);
  }

  return result;
}

export {};
