import { LinkedList } from "./LinkedList";
import { DoublyLinkedList } from "./DoublyLinkedList";

export async function LinkedListDataStructure() {
  const list = new LinkedList<number>(5);
  list
    .prepend(10)
    .append(16)
    .insert(1, 3)
    .insert(3, 4)
    .insert(5, 20)
    .insert(0, 50)
    // .remove(5)
    // .remove(1)
    // .remove(0)
    .remove(3);
  console.log(list.toString());

  const doublyLinkedList = new DoublyLinkedList<number>(15);
  console.log(doublyLinkedList.toString());
  doublyLinkedList
    .append(10)
    .prepend(8)
    .insert(1, 50)
    .insert(2, 75)
    .insert(4, 100);
  console.log(doublyLinkedList.toString());
  doublyLinkedList.remove(5).remove(0);
  console.log(doublyLinkedList.toString());
  doublyLinkedList.remove(2);
  console.log(doublyLinkedList.toString());
}
