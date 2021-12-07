import { TreeNode } from "./BinarySearchTree";

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 */
// O(m * n) time, O(k) space - k is the max depth larger tree
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTreeAsRoot(root, subRoot)) return true;
  const isLeftSubtreeOfRoot = isSubtree(root.left, subRoot);
  const isRightSubtreeOfRoot = isSubtree(root.right, subRoot);
  return isLeftSubtreeOfRoot || isRightSubtreeOfRoot;
}

// O(n) time - n is the size the smaller tree
function isSameTreeAsRoot(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  if (
    (!root1 && root2) ||
    (root1 && !root2) ||
    (root1 && root2 && root1.val !== root2.val)
  ) {
    return false;
  }
  if (!root1 && !root2) return true;
  const isLeftSameTree = isSameTreeAsRoot(root1!.left, root2!.left);
  const isRightSameTree = isSameTreeAsRoot(root1!.right, root2!.right);
  return isLeftSameTree && isRightSameTree;
}
