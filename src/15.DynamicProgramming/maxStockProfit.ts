/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxStockProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;
  let buyIndex = 0;
  let sellIndex = 1;
  let max = 0;

  // We use sellIndex to check if pointer if out-of-bound
  // since we know sellIndex is always larger than buyerIndex
  while (sellIndex < prices.length) {
    const buyPrice = prices[buyIndex];
    const sellPrice = prices[sellIndex];
    if (sellPrice < buyPrice) {
      // If sell price if smaller than buy price, make the new buy day the sell day
      // and move the sell day to the next day to the buy day
      buyIndex = sellIndex;
      sellIndex = buyIndex + 1;
    } else {
      // else we compare current profit with maxProfit profit
      // and move the sell day to the next day
      const profit = sellPrice - buyPrice;
      max = Math.max(profit, max);
      sellIndex++;
    }
  }
  return max;
}
