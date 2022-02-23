import { ListNode } from "./LinkedList";

// O(n) + O(m) time; O(1) space; Offset pointers one pass
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  // The idea is to use offset pointers
  // setup two pointers that have n nodes in betwwen
  // so that when the faster pointer traverses to the end,
  // the slower pointer lands at previous node of the node that needs to be removed

  // dummyHead pattern to prevent edge cases
  // -1 -> 1 -> 2 -> 3 -> 4 -> 5
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  head = dummyHead;

  // setup offset pointers
  let slow = head;
  let fast = head;
  let offset = 0;
  while (offset < n) {
    fast = fast.next!;
    offset++;
  } // O(n) time;

  // find the previous node of the node that needs to be removed
  while (fast.next) {
    fast = fast.next;
    slow = slow.next!;
  }
  // at this point, slow is the previous node of the node that needs to be removed

  // remove the node
  const nodeToBeRemoved = slow.next!;
  slow.next = nodeToBeRemoved.next;
  nodeToBeRemoved.next = null;

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

// One pass w/ array - O(n) time; O(n) space;
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  const dummy = new ListNode(-1);
  dummy.next = head;
  head = dummy;

  let curr: ListNode | null = head;
  const arr: ListNode[] = [];
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  const leadingNode = arr[arr.length - 1 - n];
  const tmp1 = leadingNode.next!;
  leadingNode.next = leadingNode.next!.next;
  tmp1.next = null;

  const tmp2 = head;
  head = tmp2.next;
  tmp2.next = null;
  return head;
}

// Two passes - O(n) time; O(1) space
function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(-1);
  dummy.next = head;
  head = dummy;

  // Find total length and leading node's index
  let curr: ListNode | null = head;
  let length = 0;
  while (curr) {
    length++;
    curr = curr.next;
  }
  const leadingNodeIndex = length - 1 - n;

  // Find leading node
  let leadingNode = head;
  for (let i = 0; i < leadingNodeIndex; i++) {
    leadingNode = leadingNode.next!;
  }
  const tmp1 = leadingNode.next!;
  leadingNode.next = leadingNode.next!.next;
  tmp1.next = null;

  // Remove dummy node and return
  const tmp2 = head;
  head = head.next;
  tmp2.next = null;
  return head;
}
