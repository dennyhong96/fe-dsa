import { ListNode } from "./LinkedList";

/**
 * 19. Remove Nth Node From End of List
 * https://www.youtube.com/watch?v=XVuQxVej6y8
 */

// O(n) + O(m) time; O(1) space; Offset pointers one pass
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let pointer = dummyHead;
  let offsetPointer = pointer;
  // move the offsetPointer n nodes behind of pointer
  for (let i = 0; i < n; i++) {
    offsetPointer = offsetPointer.next!;
  }

  // offsetPointer stops at the last node
  // pointer stops at the prev node of the node to remove
  while (offsetPointer && offsetPointer.next) {
    pointer = pointer.next!;
    offsetPointer = offsetPointer.next;
  }

  // Cut the remove nod
  const removeNode = pointer.next!;
  pointer.next = pointer.next!.next;
  removeNode.next = null;

  const resultHead = dummyHead.next;
  dummyHead.next = null;
  return resultHead;
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
