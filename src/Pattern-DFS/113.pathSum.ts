import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const dfs = (
    root: TreeNode | null,
    targetSum: number,
    path: number[] = []
  ) => {
    if (!root) return;
    path.push(root.val);
    if (root.val === targetSum && !root.left && !root.right) {
      return result.push(path);
    }
    const leftOver = targetSum - root.val;
    dfs(root.left, leftOver, [...path]);
    dfs(root.right, leftOver, [...path]);
  };
  dfs(root, targetSum);
  return result;
}
