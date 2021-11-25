/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

// Sliding window - O(n) time; O(1) space
function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let max = 0;
  let buyIndex = 0;
  let sellIndex = 1;
  while (sellIndex < prices.length) {
    const buyPrice = prices[buyIndex];
    const sellPrice = prices[sellIndex];
    if (sellPrice < buyPrice) {
      buyIndex = sellIndex;
      sellIndex = buyIndex + 1;
    } else {
      const profit = sellPrice - buyPrice;
      max = Math.max(max, profit);
      sellIndex++;
    }
  }
  return max;
}

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
