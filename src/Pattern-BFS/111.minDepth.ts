import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space;
function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: TreeNode[] = [root];
  let dep = 1;
  while (queue.length) {
    const levelNodeCount = queue.length;
    for (let i = 0; i < levelNodeCount; i++) {
      const node = queue.shift()!;
      if (!node.left && !node.right) {
        return dep;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    dep++;
  }
  return -1;
}

export {};
