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
  if (root.value <= min) return false;
  if (root.value >= max) return false;
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}
