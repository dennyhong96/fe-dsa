import { ListNode } from "../8.LinkedLists/LinkedList";

// O(n + m) time; O(1) space;
// or O(n) time; O(1) space; n is the smallest size between list1 and list2
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // dummyHead pattern for avoid errors from certain edge cases
  const dummyHead = new ListNode(-1);

  let curr = dummyHead;
  let curr1 = list1;
  let curr2 = list2;

  while (curr1 && curr2) {
    // if two values are equal, put node from list2 to result list first
    if (curr1.val < curr2.val) {
      const tmp = curr1.next;
      curr1.next = null;
      curr.next = curr1;
      curr = curr1;
      curr1 = tmp;
    } else {
      const tmp = curr2.next;
      curr2.next = null;
      curr.next = curr2;
      curr = curr2;
      curr2 = tmp;
    }
  }
  // connect leftover from list1 or list2
  if (curr1) curr.next = curr1;
  if (curr2) curr.next = curr2;

  const head = dummyHead.next;
  dummyHead.next = null;
  return head;
}
