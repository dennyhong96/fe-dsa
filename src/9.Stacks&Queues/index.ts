import { Stack } from "./Stack";
import { Stack2 } from "./Stack2";
import { Queue } from "./Queue";

export async function StacksQueuesDataStructure() {
  // const stack = new Stack();
  // stack.push("Denny");
  // stack.push("Sharon");
  // stack.push("Joseph");
  // stack.push("Family");
  // console.log(stack.toString());
  // console.log("peek", stack.peek());
  // console.log("pop", stack.pop());
  // console.log("peek", stack.peek());
  // console.log("pop", stack.pop());
  // console.log("peek", stack.peek());
  // console.log("pop", stack.pop());
  // console.log("peek", stack.peek());
  // console.log("pop", stack.pop());
  // console.log("peek", stack.peek());
  const queue = new Queue();
  queue.enqueue("Denny");
  queue.enqueue("Sharon");
  queue.enqueue("Joseph");
  queue.enqueue("Family");
  console.log(queue.toString());
  console.log("peek", queue.peek());
  console.log("dequeue", queue.dequeue());
  console.log("peek", queue.peek());
  console.log("dequeue", queue.dequeue());
  console.log("peek", queue.peek());
  console.log("dequeue", queue.dequeue());
  console.log("peek", queue.peek());
  console.log("dequeue", queue.dequeue());
  console.log("peek", queue.peek());
}
