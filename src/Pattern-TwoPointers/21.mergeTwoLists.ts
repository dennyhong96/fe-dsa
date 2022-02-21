import { ListNode } from "../8.LinkedLists/LinkedList";

// O(n)time; O(1)space; n is the smaller length between list1 and list2
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Use dummyHead pattern to prevent edge cases
  const dummyHead = new ListNode(-1);
  let curr = dummyHead;
  let curr1 = list1;
  let curr2 = list2;
  while (curr1 && curr2) {
    // Compare and connect the smaller node between the two
    if (curr1.val < curr2.val) {
      const tmp = curr1.next;
      curr.next = curr1;
      curr1.next = null;
      curr1 = tmp;
    } else {
      const tmp = curr2.next;
      curr.next = curr2;
      curr2.next = null;
      curr2 = tmp;
    }
    curr = curr.next;
  }

  // connect the remaining nodes if any
  if (curr1) curr.next = curr1;
  if (curr2) curr.next = curr2;

  // Get rid of the first dummy node in result list and return the list
  const head = dummyHead.next;
  dummyHead.next = null;
  return head;
}
