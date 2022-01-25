import { ListNode } from "../8.LinkedLists/LinkedList";

// O(n) time; O(1) space
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(-1);
  let curr = dummyHead;
  let curr1 = list1;
  let curr2 = list2;
  while (curr1 && curr2) {
    if (curr1.val <= curr2.val) {
      const tmp = curr1.next;
      curr.next = curr1;
      curr1 = tmp;
    } else {
      const tmp = curr2.next;
      curr.next = curr2;
      curr2 = tmp;
    }
    curr = curr.next;
  }
  if (curr1) curr.next = curr1;
  if (curr2) curr.next = curr2;
  const head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

export {};
