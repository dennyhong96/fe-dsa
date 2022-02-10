import { ListNode } from "./LinkedList";

function swapPairs(head: ListNode | null): ListNode | null {
  // Create dummy head to handle edge case
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  // Swap pairs
  let curr: ListNode | null = dummyHead;
  while (curr && curr.next && curr.next.next) {
    const tmp: ListNode = curr.next;
    const tmp2: ListNode = tmp.next!;
    const tmp3: ListNode | null = tmp2.next;
    curr.next = tmp2;
    tmp2.next = tmp;
    tmp.next = tmp3;
    curr = curr.next.next;
  }

  // Remove dummy head and return head
  head = dummyHead.next;
  return head;
}

export {};
