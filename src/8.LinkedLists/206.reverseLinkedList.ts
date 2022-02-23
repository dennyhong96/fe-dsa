import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let curr = head;
  while (curr && curr.next) {
    // reference curr next and curr next next
    const tmp = curr.next;
    const tmp2 = tmp.next;

    // curr next should point to head
    tmp.next = head;

    // stitch the gap betwwen curr and curr next next
    curr.next = tmp2;

    // curr next should be the new head
    head = tmp;
  }
  return head;
}

// recursive
// O(n) time; O(n) space;
function reverseList1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const newHead = reverseList1(head.next);
  head.next.next = head;
  head.next = null; // prevent cycle in LinkedList
  return newHead;
}
