import { Stack } from "./Stack";

export class QueueWith2Stacks<T> {
  private stack1: Stack<T>;
  private stack2: Stack<T>;

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // O(1)
  public push(x: T): void {
    this.stack1.push(x);
  }

  // O(n)
  public pop(): T | null {
    this.peek();
    const node = this.stack2.pop();
    return node?.value ?? null;
  }

  // O(n)
  public peek(): T | null {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        const node = this.stack1.pop()!;
        this.stack2.push(node.value);
      }
    }
    const node = this.stack2.peek();
    return node?.value ?? null;
  }

  // O(1)
  public empty(): boolean {
    this.peek();
    return Boolean(this.stack1.isEmpty() && this.stack2.isEmpty());
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
