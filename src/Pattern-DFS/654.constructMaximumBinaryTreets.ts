import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn - n) space;
export function constructMaximumBinaryTree(
  nums: number[],
  startIndex = 0,
  endIndex = nums.length - 1
): TreeNode | null {
  if (!nums.length || endIndex - startIndex < 0) return null;
  const maxIndex = findMaxIndex(nums, startIndex, endIndex);
  const root = new TreeNode(nums[maxIndex]);
  root.left = constructMaximumBinaryTree(nums, startIndex, maxIndex - 1);
  root.right = constructMaximumBinaryTree(nums, maxIndex + 1, endIndex);
  return root;
}

// O(n) time; O(1) space;
const findMaxIndex = (
  nums: number[],
  startIndex: number,
  endIndex: number
): number => {
  let maxIndex = startIndex;
  for (let i = startIndex; i <= endIndex; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};
