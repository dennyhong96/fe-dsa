import { TreeNode } from "../10.Trees/BinarySearchTree";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root || (!root.left && !root.right)) return root;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
