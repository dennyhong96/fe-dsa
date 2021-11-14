export class DoublyLinkedList<T> {
  public head: Node<T>;
  public tail: Node<T>;
  public length: number;

  constructor(headValue: T) {
    const headNode = new Node(headValue);
    headNode.next = null;
    headNode.prev = null;
    this.head = headNode;
    this.tail = headNode;
    this.length = 1;
  }

  // O(1)
  public append(value: T): DoublyLinkedList<T> {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(1)
  public prepend(value: T): DoublyLinkedList<T> {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // O(n/2)
  public insert(index: number, value: T): DoublyLinkedList<T> {
    if (index < 0 || index > this.length) {
      throw new Error(`index ${index} is out of bound`);
    }
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    const newNode = new Node(value);
    const currNode = this.traversal(index);
    newNode.prev = currNode.prev;
    newNode.next = currNode;
    currNode.prev!.next = newNode;
    currNode.prev = newNode;
    this.length++;
    return this;
  }

  // O(n/2)
  public remove(index:number): DoublyLinkedList<T> {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`index ${index} is out of bound`);
    }
    if (this.length === 1) {
      throw new Error(`Cannot remove the head node`);
    }
    if (index === 0) {
      this.head = this.head.next as Node<T>;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev!;
      this.tail.next = null;
    } else {
      const nodeToRemove = this.traversal(index)
      nodeToRemove.prev!.next = nodeToRemove.next;
      if (nodeToRemove.next) {
        nodeToRemove.next.prev = nodeToRemove.prev;
      }
      nodeToRemove.prev = null;
      nodeToRemove.next = null;
    }
    this.length--;
    return this;
  }

  // O(n/2)
  private traversal(index: number): Node<T> {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`index ${index} is out of bound`)
    }
    let node: Node<T>;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next as Node<T>;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev as Node<T>;
      }
    }
    return node;
  }

  // O(n)
  public toString(): string {
    let result = `[ `
    let node: Node<T> | null = this.head;
    while (node !== null) {
      result += `${node.value} <--> `;
      node = node.next;
    }
    result += `null ]
HEAD: ${this.head.value}
TAIL: ${this.tail.value}
LENGTH: ${this.length}
    `
    return result;
  }
}

export class Node<T> {
  public value: T;
  public prev: Node<T> | null;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}