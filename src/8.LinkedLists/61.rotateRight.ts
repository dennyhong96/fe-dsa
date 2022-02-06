import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  // get the length of list
  // get a ref of the tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  k = k % length;
  if (k === 0) return head;
  console.log({ length, tail });

  // get the leading node using length and k
  let leading = head;
  let moveBy = length - k - 1;
  while (moveBy > 0) {
    leading = leading.next!;
    moveBy--;
  }

  // cut the segment of nodes on the right of the leading node
  const segmentHead = leading.next;
  leading.next = null;

  // put the segment on the left of head
  tail.next = head;
  head = segmentHead;
  return head;
}

// Brute force - O(n) time; O(n) space;
function rotateRight1(head: ListNode | null, k: number): ListNode | null {
  const nodes: ListNode[] = []; // O(n) space;
  const nodeNewOrder: ListNode[] = []; // O(n) space;

  let curr: ListNode | null = head;

  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  } // O(n) time;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.next = null;
    const newIndex = (i + k) % nodes.length;
    nodeNewOrder[newIndex] = node;
  }

  const dummyHead = new ListNode(-1);
  curr = dummyHead;
  for (let i = 0; i < nodeNewOrder.length; i++) {
    const node = nodeNewOrder[i];
    curr.next = node;
    curr = curr.next;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

export {};
