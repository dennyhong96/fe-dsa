import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  const [largest, largestIndex] = findLargest(nums);
  const root = new TreeNode(largest);
  root.left = constructMaximumBinaryTree(nums.slice(0, largestIndex));
  root.right = constructMaximumBinaryTree(nums.slice(largestIndex + 1));
  return root;
}

function findLargest(nums: number[]): [number, number] {
  let max = -Infinity;
  let maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  return [max, maxIndex];
}
