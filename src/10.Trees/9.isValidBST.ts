/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "./BinarySearchTree";

// O(n) time; O(m) space - m is depth of tree
function isValidBST(root: TreeNode | null): boolean {
  const validator = (
    root: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    const isLeftValid = validator(root.left, min, root.val); // every node val in the left sub-tree must be smaller than node
    const isRightValid = validator(root.right, root.val, max); // every node val in the right sub-tree must be greater than root
    return isLeftValid && isRightValid;
  };
  return validator(root, -Infinity, Infinity);
}
