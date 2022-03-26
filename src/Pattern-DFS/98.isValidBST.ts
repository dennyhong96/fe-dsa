/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; Space is O(n) for the recursion stack, in worse case when the tree is unbalanced and all the nodes are on one side. In best case when the tree is evenly balanced, the space will only be O(log n)
function isValidBST(
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity
): boolean {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

export {};
