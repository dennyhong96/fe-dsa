/**
 *      9
 *   4     20
 * 1  6   15  170
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

export function breadthFirstSearchIt(
  root: TreeNode,
  queue = new Queue<TreeNode>(),
  result: Array<number> = []
) {
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const treeNode = queue.dequeue()!.value;
    result.push(treeNode.value);
    if (treeNode.left) queue.enqueue(treeNode.left);
    if (treeNode.right) queue.enqueue(treeNode.right);
  }
  return result;
}

export function breadthFirstSearchRe(
  root: TreeNode | null,
  queue = new Queue<TreeNode>(),
  result: Array<number> = []
): Array<number> {
  if (root) queue.enqueue(root);
  if (queue.isEmpty()) return result;
  const treeNode = queue.dequeue()!.value;
  result.push(treeNode.value);
  if (treeNode.left) queue.enqueue(treeNode.left);
  if (treeNode.right) queue.enqueue(treeNode.right);
  return breadthFirstSearchRe(null, queue, result);
}
