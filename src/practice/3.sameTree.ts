import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(h) space; h is height of the tree
export function sameTree(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  // if both root are empty, are they considered the same?
  if (!root1 && !root2) return true;
  if (
    (!root1 && root2) ||
    (root1 && !root2) ||
    (root1 && root2 && root1.val !== root2.val)
  ) {
    return false;
  }
  // when code reaches this line, it means (root1 && root2 && root1.val === root2.val)
  return (
    sameTree(root1!.left, root2!.left) && sameTree(root1!.right, root2!.right) // recursively validate left and right subtree
  );
}
