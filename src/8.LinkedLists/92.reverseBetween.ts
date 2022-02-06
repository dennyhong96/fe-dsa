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
  let leadingNode: ListNode;
  let partialHead: ListNode;
  while (index < right) {
    if (index + 1 <= left) {
      if (index + 1 === left) {
        leadingNode = curr;
        partialHead = leadingNode.next!;
        curr = partialHead;
      } else {
        curr = curr.next!;
      }
    } else {
      const tmp = curr.next!;
      curr.next = tmp.next;
      leadingNode!.next = tmp;
      tmp.next = partialHead!;
      partialHead = tmp;
    }
    index++;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

// O(n) time; O(1) space; Two passes
function reverseBetween1(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  let leading: ListNode;
  let index = 0;
  let curr: ListNode | null = dummyHead;
  while (curr) {
    if (index + 1 === left) {
      leading = curr;
      break;
    }
    index++;
    curr = curr.next;
  }

  let partialHead = leading!.next!;
  let curr2 = partialHead;
  while (left < right) {
    const tmp = curr2.next!;
    curr2.next = tmp.next;
    leading!.next = tmp;
    tmp.next = partialHead;
    partialHead = tmp;
    left++;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

export {};
