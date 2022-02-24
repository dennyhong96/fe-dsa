import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(1) space;
export function levelOrderBottom(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    const levelResult: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      levelResult.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(levelResult);
  }
  return result;
}

// O(n + logn) time; O(1) space;
export function levelOrderBottom1(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const len = queue.length;
    const levelRes: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelRes.push(node.val);
    }
    if (levelRes) result.push(levelRes);
  } // O(n) time;
  let l = 0;
  let r = result.length - 1;
  while (l < r) {
    const tmp = result[l];
    result[l] = result[r];
    result[r] = tmp;
    l++;
    r--;
  } // O(logn) time;
  return result;
}
