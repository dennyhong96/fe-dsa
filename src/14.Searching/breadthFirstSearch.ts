import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

export function breadthFirstTraversalIt(
  root: TreeNode,
  list: Array<TreeNode> = [],
  queue: Queue<TreeNode> = new Queue<TreeNode>()
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

export function breadthFirstTraversalRe(
  root?: TreeNode,
  list: Array<TreeNode> = [],
  queue: Queue<TreeNode> = new Queue<TreeNode>()
): Array<TreeNode> {
  if (root) {
    queue.enqueue(root);
  }
  if (queue.isEmpty()) return list;
  const treeNode = queue.dequeue()!.value;
  list.push(treeNode);
  if (treeNode.left) queue.enqueue(treeNode.left);
  if (treeNode.right) queue.enqueue(treeNode.right);
  return breadthFirstTraversalRe(undefined, list, queue);
}
