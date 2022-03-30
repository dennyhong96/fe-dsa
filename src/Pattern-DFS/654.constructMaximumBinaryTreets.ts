import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
function constructMaximumBinaryTree(
  nums: number[],
  // To avoid having to create extra space slicing the nums array
  start = 0,
  end = nums.length - 1
): TreeNode | null {
  if (end < start) return null;
  const [max, maxIndex] = findMax(nums, start, end);
  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums, start, maxIndex - 1);
  root.right = constructMaximumBinaryTree(nums, maxIndex + 1, end);
  return root;
}

// O(n) time; O(1) space;
function findMax(nums: number[], start: number, end: number): [number, number] {
  let max = -Infinity;
  let maxIndex = -1;
  for (let i = start; i <= end; i++) {
    const num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  return [max, maxIndex];
}
