import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

// O(n) time, O(n) space
export function breadthFirstTraversalRe(
  root: TreeNode | null,
  queue = new Queue<TreeNode>(),
  list: Array<TreeNode> = []
): Array<TreeNode> {
  if (root) queue.enqueue(root);
  if (queue.isEmpty()) return list;
  const treeNode = queue.dequeue()!.value;
  list.push(treeNode);
  if (treeNode.left) queue.enqueue(treeNode.left);
  if (treeNode.right) queue.enqueue(treeNode.right);
  return breadthFirstTraversalRe(null, queue, list);
}

// O(n) time, O(n) space
export function breadthFirstTraversalIt(
  root: TreeNode,
  queue = new Queue<TreeNode>(),
  list: Array<TreeNode> = []
): Array<TreeNode> {
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const treeNode = queue.dequeue()!.value;
    list.push(treeNode);
    if (treeNode.left) queue.enqueue(treeNode.left);
    if (treeNode.right) queue.enqueue(treeNode.right);
  }
  return list;
}
