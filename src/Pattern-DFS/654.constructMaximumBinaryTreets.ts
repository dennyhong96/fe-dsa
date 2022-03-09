import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  const { max, maxIndex } = findMax(nums);
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return root;
}

// O(n) time; O(1) space;
function findMax(nums: number[]) {
  let maxIndex = -1;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  return { max, maxIndex };
}
