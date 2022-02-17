import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  function dfs(root: TreeNode, target = targetSum, list: number[] = []) {
    list.push(root.val);

    // We are at a leaf node, check if path sums to target
    if (!root.left && !root.right && root.val === target) {
      result.push(list);
    }

    if (root.left) {
      dfs(root.left, target - root.val, list.slice());
    }

    if (root.right) {
      dfs(root.right, target - root.val, list.slice());
    }
  }
  dfs(root);
  return result;
}

export {};
