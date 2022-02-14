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

// Recursive - O(n) time; O(1) space;
function connect(root: Node | null): Node | null {
  if (!root || (!root.left && !root.right)) return root;

  if (root.left) {
    root.left.next = root.right ?? findNextNode(root);
  }

  if (root.right) {
    root.right.next = findNextNode(root);
  }

  // Need to connect right side nodes first, so we have the connections built for findNextNode to work properly on left side nodes
  connect(root.right);
  connect(root.left);

  return root;
}

// Find the next connection node from the given node or its next nodes' left or right child
function findNextNode(node: Node): Node | null {
  let nextNode = node.next;
  while (nextNode) {
    if (nextNode.left) {
      return nextNode.left;
    }
    if (nextNode.right) {
      return nextNode.right;
    }
    nextNode = nextNode.next;
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
      if (i < len - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

export {};
