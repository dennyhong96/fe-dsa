import { ListNode } from "../8.LinkedLists/LinkedList";

// O(n) time; O(1) space; n is the shorter list's length
export function mergeLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // dummyHead pattern to prevent edge cases
  const dummyHead = new ListNode(-1);
  let cursor = dummyHead;
  let cursor1 = list1;
  let cursor2 = list2;

  while (cursor1 && cursor2) {
    // if left list node and right list node have the same value
    // which should goes in the result list first
    if (cursor1.val < cursor2.val) {
      const tmp = cursor1.next;
      cursor1.next = null;
      cursor.next = cursor1;
      cursor = cursor1;
      cursor1 = tmp;
    } else {
      const tmp = cursor2.next;
      cursor2.next = null;
      cursor.next = cursor2;
      cursor = cursor2;
      cursor2 = tmp;
    }
  }
  // Connect leftover nodes to cursor, only one list could have leftovers
  if (cursor1) cursor.next = cursor1;
  if (cursor2) cursor.next = cursor2;

  const head = dummyHead.next;
  dummyHead.next = null;
  return head;
}
