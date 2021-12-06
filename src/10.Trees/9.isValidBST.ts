/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "./BinarySearchTree";

function isValidBST(
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity
): boolean {
  if (!root) return true;
  if (root.val <= min) return false;
  if (root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
