import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
export function oddEvenList(head: ListNode | null): ListNode | null {
  // The idea is to use two pointers
  // curr pointer is used for traversal
  // nextInsertAfter is used to maintain the last "odd" node
  // as we traverse, when we get an additional "odd" node,
  // stitch it to nextInsertAfter.next

  if (!head) return null;

  let index = 1;
  let curr: ListNode | null = head;
  let nextInsertAfter = head;
  while (curr && curr.next) {
    if (index % 2 === 0) {
      const nextOdd: ListNode = curr.next;
      const nextEven: ListNode | null = nextOdd.next;

      // insert odd node
      const tmp = nextInsertAfter.next;
      nextInsertAfter.next = nextOdd;
      nextOdd.next = tmp;

      // increment pointers
      curr.next = nextEven;
      nextInsertAfter = nextInsertAfter.next;

      index++; // index++ here because we inserted an "odd" node before current index
    }

    curr = curr.next;
    index++;
  }

  return head;
}

// 1 -> 2 -> 3 -> 4 -> 5; i = 1
// nc
// 1 -> 2 -> 3 -> 4 -> 5; i = 2
// n    c
// 1 -> 3 -> 2 -> 4 -> 5; i = 4
//      n         c
// 1 -> 3 -> 5 -> 2 -> 4; i = 6
//           n              c (null)
