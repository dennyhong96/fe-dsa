import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space;
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let depth = 1;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  return -1;
}

// O(n) time; O(h) space
export function minDepth1(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left) return 1 + minDepth(root.right); // handle when no left subtree
  if (!root.right) return 1 + minDepth(root.left); // handle when no right subtree
  return 1 + Math.min(minDepth(root.left), minDepth(root.right)); // have both subtrees, pick smaller depth
}
