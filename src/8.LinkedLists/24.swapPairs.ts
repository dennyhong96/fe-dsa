import { ListNode } from "./LinkedList";

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

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

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

export {};
