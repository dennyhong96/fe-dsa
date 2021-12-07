import { TreeNode } from "./BinarySearchTree";

/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 */

// O(n) time; O(m) space - m is depth of tree
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
