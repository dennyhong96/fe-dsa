import { TreeNode } from "./BinarySearchTree";

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

// Recursive preorder DFS, O(n) time; O(n) space
function kthSmallest(root: TreeNode | null, k: number): number {
  const result: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    if (root.left) dfs(root.left);
    result.push(root.val);
    if (root.right) dfs(root.right);
  };
  dfs(root);
  return result[k - 1];
}

// Iterative preorder DFS - O(n) time; O(n) space
function kthSmallest1(root: TreeNode | null, k: number): number {
  let n = 0;
  const stack: TreeNode[] = [];
  let currNode = root;
  while (currNode || stack.length) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    const node = stack.pop()!;
    n++;
    if (n === k) return node.val;
    currNode = node.right;
  }
  return -1;
}

// Iterative preorder DFS - O(n) time; O(n) space
function kthSmallest2(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let currNode = root;
  while (currNode) {
    stack.push(currNode);
    currNode = currNode.left;
  }
  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    let curr = node.right;
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
  }
  return result[k - 1];
}

export {};
