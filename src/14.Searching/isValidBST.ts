/**
 *      9
 *   4     20
 * 1  6   5  170
 *
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";

export function isValidBST(
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
