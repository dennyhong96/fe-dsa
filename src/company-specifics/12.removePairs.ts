// two pointer

function removePairs(str: string): number {
  let maxPairsRemoved = 0;

  const remove = (l: number, r: number): void => {
    let pairsRemoved = 0;
    while (l >= 0 && r < str.length) {
      if (
        (str[l] === "0" && str[r] === "1") ||
        (str[l] === "1" && str[r] === "0")
      ) {
        pairsRemoved++;
      } else {
        break;
      }
      l--;
      r++;
    }
    maxPairsRemoved = Math.max(maxPairsRemoved, pairsRemoved);
  };

  for (let i = 0; i < str.length - 1; i++) {
    remove(i, i + 1);
  }

  return str.length - maxPairsRemoved * 2;
}

console.log(removePairs("01010"));
console.log(removePairs("111000"));
console.log(removePairs("111*000"));
console.log(removePairs("111**000"));
console.log(removePairs("01"));
console.log(removePairs("00"));
console.log(removePairs("010"));

// probably can use one pass + a stack
