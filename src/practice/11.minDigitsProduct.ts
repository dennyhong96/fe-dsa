// O(n) time; O(n) space; n is product digit count
export function minDigitsProduct(product: number): number {
  if (product === 0) return 10;
  if (product === 1) return 1;
  const result: number[] = [];
  let num = product;
  while (num > 1) {
    let prevResLength = result.length;
    // start from largtest 9 first, so when we reverse results we have the smallest
    for (let i = 9; i > 1; i--) {
      if (num % i === 0) {
        result.push(i);
        num = num / i;
        break;
      }
    }
    if (result.length === prevResLength) return -1; // has no result, such as 19,26
  }
  return Number(result.sort((a, b) => a - b).join(""));
}

console.log(minDigitsProduct(26));
