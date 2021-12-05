/*
I B C A L K A
D R F C A E A
G H O E L A D

IROCLED
 */
function decode(message: string[][]) {
  if (!message.length || !message[0].length) return "";
  if (message.length === 1 || message[0].length === 1) return message[0][0];

  let result = "";
  let rowIndex = 0;
  let colIndex = 0;
  let direction: "UP" | "DOWN" = "DOWN";
  while (result.length < message[0].length) {
    console.log({ rowIndex });
    console.log({ colIndex });
    console.log(message[rowIndex][colIndex]);
    result += message[rowIndex][colIndex];

    if (rowIndex === 0) {
      console.log("direction changed to down");
      direction = "DOWN";
    } else if (rowIndex === message.length - 1) {
      console.log("direction changed to up");
      direction = "UP";
    }

    console.log(direction);

    if (direction === "DOWN") {
      rowIndex++;
    } else {
      rowIndex--;
    }
    colIndex++;
  }
  return result;
}

console.log(
  decode([
    ["A", "B", "C", "D", "E", "F"],
    ["D", "E", "F", "G", "H", "I"],
    ["G", "H", "I", "J", "K", "L"],
  ])
);

//
function longestPalindrome(s: string): string {
  let longestPalinDromeRange: number[] = [];

  const updateLongestPalinDrome = (
    leftPointer: number,
    rightPointer: number
  ) => {
    while (
      leftPointer >= 0 &&
      rightPointer < s.length &&
      s[leftPointer] === s[rightPointer]
    ) {
      const length = rightPointer - leftPointer + 1;
      if (
        longestPalinDromeRange.length !== 2 ||
        length > longestPalinDromeRange[1] - longestPalinDromeRange[0] + 1
      ) {
        longestPalinDromeRange = [leftPointer, rightPointer];
      }
      leftPointer--;
      rightPointer++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    //         Check for potential odd palindrome substring
    let leftPointer = i;
    let rightPointer = i;
    updateLongestPalinDrome(leftPointer, rightPointer);

    //         Check for potential even palindrome substring
    leftPointer = i;
    rightPointer = i + 1;
    updateLongestPalinDrome(leftPointer, rightPointer);
  }

  let longestPalinDrome = "";
  if (longestPalinDromeRange.length === 2) {
    for (
      let i = longestPalinDromeRange[0];
      i <= longestPalinDromeRange[1];
      i++
    ) {
      longestPalinDrome += s[i];
    }
  }

  return longestPalinDrome;
}
