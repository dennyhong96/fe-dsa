function removePairs(str: string): number {
  let maxRemovedCount = 0;

  const updateRemovedCount = (l: number, r: number) => {
    let removePairsCount = 0;
    while (l >= 0 && r < str.length) {
      if (
        (str[l] === "0" && str[r] === "1") ||
        (str[l] === "1" && str[r] === "0")
      ) {
        removePairsCount++;
      } else {
        break;
      }
      l--;
      r++;
    }
    maxRemovedCount = Math.max(maxRemovedCount, removePairsCount);
  };

  for (let i = 0; i < str.length - 1; i++) {
    updateRemovedCount(i, i + 1);
  }

  return str.length - maxRemovedCount * 2;
}

console.log(removePairs("01010"));
console.log(removePairs("111000"));
console.log(removePairs("111*000"));
console.log(removePairs("111**000"));
console.log(removePairs("01"));
console.log(removePairs("00"));
console.log(removePairs("010"));
