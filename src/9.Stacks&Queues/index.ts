import { Stack } from "./Stack";
import { Stack2 } from "./Stack2";

export async function StacksQueuesDataStructure() {
  const stack = new Stack();
  stack.push("Denny");
  stack.push("Sharon");
  stack.push("Joseph");
  stack.push("Family");
  console.log(stack.toString());
  console.log("peek", stack.peek());
  console.log("pop", stack.pop());
  console.log("peek", stack.peek());
  console.log("pop", stack.pop());
  console.log("peek", stack.peek());
  console.log("pop", stack.pop());
  console.log("peek", stack.peek());
  console.log("pop", stack.pop());
  console.log("peek", stack.peek());
}
