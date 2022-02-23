import { ListNode } from "./LinkedList";

// slow & fast pointers - O(n) time; O(1) space
export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;
  // use offset pointers to find the cut off point
  let slow = head;
  let fast = head;

  // while loop breaks off with slow being the cutoff point
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next!;
  }

  let segment2Head = slow.next;
  slow.next = null;

  // reverse segment2;
  let curr = segment2Head;
  while (curr && curr.next) {
    console.log({ curr, "curr.next": curr.next });
    let tmp = curr.next;
    let tmp2 = curr.next.next;
    tmp.next = segment2Head;
    curr.next = tmp2;
    segment2Head = tmp;
  }

  // stitch two segments together
  let curr1 = head;
  let curr2 = segment2Head;
  while (curr1 && curr2) {
    const tmp = curr1.next!;
    const tmp2 = curr2.next;
    curr1.next = curr2;
    curr2.next = tmp;
    curr1 = tmp;
    curr2 = tmp2;
  }
}

// 1,2; 4,3
// 1,4,2; 3
// 1,4,2,3

// 1,2,3 5,4
// 1,5,2,3; 4
// 1,5,2,4,3

// O(n) time; O(n) space
function reorderList2(head: ListNode | null): void {
  if (!head) return;

  let currNode: ListNode | null = head;
  let index = 0;
  const map = new Map<number, ListNode>(); // index -> ListNode
  while (currNode) {
    map.set(index, currNode);
    currNode = currNode.next;
    index++;
  }
  const length = index; // index becomes the length when the while loop breaks off

  let tail = map.get(length - 1)!;

  // Handle case where tail is head, there's only one node in list
  if (tail !== head) {
    head.next = tail; // connects tail to head
    tail = head.next;
  }
  for (let i = 1; i < Math.ceil(length / 2); i++) {
    const nodeFromLeftHalf = map.get(i)!;
    const nodeFromRightHalf = map.get(length - 1 - i)!;
    tail.next = nodeFromLeftHalf;
    nodeFromLeftHalf.next = null;
    tail = tail.next;

    // Handle cases like length = 5, i = 2, length - 1 - i = 2
    // nodeFromLeftHalf and nodeFromRightHalf points to the same node
    if (nodeFromLeftHalf !== nodeFromRightHalf) {
      tail.next = nodeFromRightHalf;
      nodeFromRightHalf.next = null;
      tail = tail.next;
    }
  }
}
