// Queue implemented with LinkedList
export class Queue<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  public length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  public peek(): Node<T> | null {
    return this.first;
  }

  // O(1)
  public isEmpty(): boolean {
    return this.length === 0;
  }

  // O(1)
  public enqueue(value: T): Queue<T> {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      this.last!.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }

  // O(1)
  public dequeue(): Node<T> | null {
    if (!this.first) {
      return null;
    } else {
      const node = this.first;
      if (this.first === this.last) {
        // Only 1 item in queue
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
        node.next = null;
      }
      this.length--;
      return node;
    }
  }

  // O(n)
  toString(): string {
    const buffer: string[] = [];
    let node = this.first;
    let result = "[ ";
    while (node) {
      buffer.push(`${node.value}`);
      node = node.next;
    }
    result += buffer.join(", ");
    result += ` ]
FIRST: ${this.first?.value ?? "null"}
LAST: ${this.last?.value ?? "null"}
LENGTH: ${this.length}
    `;
    return result;
  }
}

export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
