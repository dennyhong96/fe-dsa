import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
export function pathSum(
  root: TreeNode | null,
  targetSum: number,
  paths: number[][] = [],
  currPath: number[] = []
): number[][] {
  if (!root) return paths;
  if (root.val === targetSum && !root.left && !root.right) {
    currPath.push(root.val);
    paths.push(currPath);
    return paths;
  }
  const remainder = targetSum - root.val;
  currPath.push(root.val);
  pathSum(root.left, remainder, paths, [...currPath]);
  pathSum(root.right, remainder, paths, [...currPath]);
  return paths;
}
