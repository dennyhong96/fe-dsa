// Sliding window - O(n) time; O(1) space
export function maxProfit(prices: number[]): number {
  // the idea is to use l pointer to track buy price
  // loop through the prices, for each iteraction update max profit when sell price >= buy price
  // otherwise we are losing money, there's no way current buy and sell price is the result
  // increase l to try buying at a later date

  let l = 0;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const sellPrice = prices[i];
    const buyPrice = prices[l];
    if (sellPrice >= buyPrice) {
      const profit = sellPrice - buyPrice;
      max = Math.max(max, profit);
    } else {
      l = i; // try to buy at current sell date

      // use if here instead of while, because when we update l to i
      // we potentially skip throught multiple numbers
    }
  }
  return max;
}

// [2, 1, 2, 1, 0, 1, 2] - max = 0
//  li
// [2, 1, 2, 1, 0, 1, 2] - max = 0
//  l  i
// [2, 1, 2, 1, 0, 1, 2] - max = 1
//     l  i
// [2, 1, 2, 1, 0, 1, 2] - max = 1
//     l     i
// [2, 1, 2, 1, 0, 1, 2] - max = 1
//     l        i
// [2, 1, 2, 1, 0, 1, 2] - max = 1
//              l  i
// [2, 1, 2, 1, 0, 1, 2] - max = 2
//              l     i

// Brute force - O(n^2) time; O(1) space
function maxProfit2(prices: number[]): number {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const buyPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const sellPrice = prices[j];
      const profit = sellPrice - buyPrice;
      max = Math.max(max, profit);
    }
  }
  return max;
}
