//Implement a function that reverses a string using iteration...and then recursion!
export function reverseString(str: string): string {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
