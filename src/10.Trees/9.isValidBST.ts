/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import { TreeNode } from "./BinarySearchTree";

// O(n) time,O(m) space where h is the maximal depth the tree.
function isValidBST(root: TreeNode | null): boolean {
  const isValidSubtree = (
    node: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (!node) return true; // an empty bst is still a valid bst
    if (node.val <= min || node.val >= max) return false;
    return (
      isValidSubtree(node.left, min, node.val) && // every node val in the left sub-tree must be smaller than node
      isValidSubtree(node.right, node.val, max) // every node val in the right sub-tree must be greater than root
    );
  };

  return isValidSubtree(root, -Infinity, Infinity);
}
