import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
export function swapPairs(head: ListNode | null): ListNode | null {
  // dummyHead pattern to prevent edge cases
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  head = dummyHead;

  // -1 -> 1 -> 2 -> 3 -> 4

  // Swap pairs
  let curr = head;
  while (curr && curr.next && curr.next.next) {
    const next1 = curr.next!;
    const next2 = next1.next!;
    const next3 = next2.next;
    curr.next = next2;
    next2.next = next1;
    next1.next = next3;
    curr = next1;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}
