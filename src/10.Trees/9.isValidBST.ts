/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "./BinarySearchTree";

// O(n) time; O(h) space - h is depth of tree
function isValidBST(root: TreeNode | null): boolean {
  const check = (root: TreeNode | null, min: number, max: number): boolean => {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    const isLeftSubtreeValid = check(root.left, min, root.val);
    const isRightSubtreeValid = check(root.right, root.val, max);
    return isLeftSubtreeValid && isRightSubtreeValid;
  };
  return check(root, -Infinity, Infinity);
}

export {};
