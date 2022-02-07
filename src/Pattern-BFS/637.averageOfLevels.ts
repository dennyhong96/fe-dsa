import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space;
function averageOfLevels(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (!root) return result;
  let queue: TreeNode[] = [root];
  while (queue.length) {
    const levelCount = queue.length;
    let levelTotal = 0;
    for (let i = 0; i < levelCount; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelTotal += node.val;
    }
    result.push(levelTotal / levelCount);
  }
  return result;
}

export {};
