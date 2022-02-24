import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(1) space;
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];
  let depth = 1;
  while (queue.length) {
    const levelResult: number[] = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (depth % 2 === 0) {
        levelResult.unshift(node.val); //
      } else {
        levelResult.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelResult);
    depth++;
  }
  return result;
}
