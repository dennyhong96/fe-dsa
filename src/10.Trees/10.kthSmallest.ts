import { TreeNode } from "./BinarySearchTree";

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

// Recursive pre-order - O(n) time; O(n) space
function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;
  const inorder: number[] = [];
  const traverse = (node: TreeNode) => {
    if (node.left) traverse(node.left);
    inorder.push(node.val);
    if (node.right) traverse(node.right);
    return node;
  };
  traverse(root);
  return inorder[k - 1];
}

// Iterative pre-order - O(n) time; O(n) space;
function kthSmallest1(root: TreeNode | null, k: number): number {
  let n = 0;
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop()!;
    n++;
    if (n === k) return node.val;
    curr = node.right;
  }
  return -1;
}
