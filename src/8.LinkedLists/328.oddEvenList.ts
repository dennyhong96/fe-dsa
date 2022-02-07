import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let currIndex = 0;
  let curr: ListNode | null = head;
  let insertAfter = head;
  while (curr && curr.next) {
    if (currIndex % 2 !== 0) {
      const tmp = curr.next;
      curr.next = curr.next.next;

      const tmp2 = insertAfter.next;
      insertAfter.next = tmp;
      tmp.next = tmp2;

      insertAfter = tmp;
      currIndex++; // increment because we inserted a node before currIndex
    } else {
      insertAfter = curr;
    }

    currIndex++;
    curr = curr.next;
  }

  return head;
}

// 1 -> 2 -> 3 -> 4 -> 5
// insertAfter:1 curr:1    currIndex:0    1 -> 2 -> 3 -> 4 -> 5
// insertAfter:1 curr:2    currIndex:1    1 -> 3 -> 2 -> 4 -> 5
// insertAfter:3 curr:4    currIndex:3    1 -> 3 -> 5 -> 2 -> 4
// insertAfter:4 curr:null currIndex:5    1 -> 3 -> 5 -> 2 -> 4

export {};
