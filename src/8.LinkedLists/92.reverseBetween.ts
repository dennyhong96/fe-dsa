import { ListNode } from "./LinkedList";

// O(n) time; O(1) space; One pass
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let index = 0;
  let curr = dummyHead;
  let leading: ListNode;
  let segmentHead: ListNode;
  let segmentCurr: ListNode;
  while (index < right) {
    if (index < left) {
      if (index + 1 === left) {
        leading = curr;
        segmentHead = leading.next!;
        segmentCurr = segmentHead;
      }
      curr = curr.next!;
    } else {
      const tmp = segmentCurr!.next!;
      segmentCurr!.next = tmp.next;
      leading!.next = tmp;
      tmp.next = segmentHead!;
      segmentHead = tmp;
    }
    index++;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

// O(n) time; O(1) space; Two passes
export function reverseBetween1(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // dummyHead pattern to handle edge cases
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  head = dummyHead;

  // -1 -> 1 -> 2 -> 3 -> 4 -> 5
  // find the node before the segment we need to reverse
  let pointer = head;
  let i = 0;
  while (i < left - 1) {
    pointer = pointer.next!;
    i++;
  }

  // reverse the the segment
  let curr = pointer.next!;
  for (let i = 0; i < right - left; i++) {
    const tmp = curr.next!;
    const tmp2 = tmp.next;
    tmp.next = pointer.next;
    curr.next = tmp2;
    pointer.next = tmp;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}
