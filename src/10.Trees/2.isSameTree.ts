import { TreeNode } from "./BinarySearchTree";

/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 */
// O(n) time - n is the min node between p and q tree; O(m) space - m is the min depth between p and q tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) {
    return false;
  } else if (!p && !q) {
    return true;
  } else {
    const isLeftSubtreeSame = isSameTree(p!.left, q!.left);
    const isRightSubtreeSame = isSameTree(p!.right, q!.right);
    return isLeftSubtreeSame && isRightSubtreeSame;
  }
}
