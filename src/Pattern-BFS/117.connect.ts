class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// Recursive - O(n^2) time; O(logn) space;
function connect(root: Node | null): Node | null {
  if (!root) return null;
  if (root.left) {
    // try with root's right child first
    // if doesn't exist, traverse right to find a sibling that has a left or right child
    root.left.next = root.right ?? findNextNode(root);
  }
  if (root.right) {
    root.right.next = findNextNode(root);
  }
  // need to connect the right subtree first before connecting left
  // because we potentially need those connections on the left side
  connect(root.right);
  connect(root.left);
  return root;
}

// find a next slibling node that is at same level as root
// which has either a left or right node
// O(n/2) time; O(1) space;
function findNextNode(root: Node): Node | null {
  let curr = root.next;
  while (curr) {
    if (curr.left) return curr.left;
    if (curr.right) return curr.right;
    curr = curr.next;
  }
  return null;
}

// Iterative - O(n) time; O(n) space;
function connect1(root: Node | null): Node | null {
  if (!root) return null;
  const queue: Node[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (i < len - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

export {};
