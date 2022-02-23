import { ListNode } from "./LinkedList";

// O(n + k) time; O(1) space;
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  if (!head.next || k === 0) return head;

  // 1 -> 2 -> 3 -> 4 -> 5
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  } // O(n)
  k = k % length; // handle k > length;
  if (k === 0) return head;

  // setup offset pointers
  let slow = head;
  let fast = head;
  let offset = 0;
  while (offset < k) {
    fast = fast.next!;
    offset++;
  } // O(k)

  // while loop breaks off at slow being the previous node of node we need to cut
  while (fast.next) {
    fast = fast.next!;
    slow = slow.next!;
  } // O(n)

  // cut and stitch
  const segment = slow.next;
  slow.next = null;
  const prevHead = head;
  head = segment;
  tail.next = prevHead;

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
