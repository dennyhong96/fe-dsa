import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(h) space; h is height of tree
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
