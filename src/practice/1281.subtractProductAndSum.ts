// O(n) time; O(1) space; n is digit count
export function subtractProductAndSum(n: number): number {
  let num = n;
  let product = 1; // product starts off as 1
  let sum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    product *= lastDigit;
    sum += lastDigit;
    num = (num - lastDigit) / 10;
  }
  return product - sum;
}
