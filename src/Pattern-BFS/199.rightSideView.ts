import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space;
export function rightSideView(root: TreeNode | null): number[] {
  // the idea is to use level order traversal
  // and push the right most node of each level into result array
  const result: number[] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (i === len - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}
