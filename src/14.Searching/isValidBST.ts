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
  if (root.value <= min) return false;
  if (root.value >= max) return false;
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}
