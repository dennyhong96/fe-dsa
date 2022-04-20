// O(n) time; O(1) space; n is digit count of input number
function subtractProductAndSum(n: number): number {
  let sum = 0;
  let product = 1;
  while (n > 0) {
    const dig = n % 10;
    sum += dig;
    product *= dig;
    n = Math.floor(n / 10);
  }
  return product - sum;
}
