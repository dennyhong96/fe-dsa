/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxStockProfit(prices: Array<number>) {
  if (prices.length <= 1) return 0; // Cannot make any profit if selling on same day

  // Sliding windows solution
  let buyDay = 0;
  let sellDay = buyDay + 1;
  let maxProfit = 0;
  while (sellDay < prices.length) {
    const buyPrice = prices[buyDay];
    const sellPrice = prices[sellDay];
    if (sellPrice < buyPrice) {
      // If sell price if smaller than buy price, make the new buy day the sell day
      // and move the sell day to the next day
      buyDay = sellDay;
      sellDay = buyDay + 1;
    } else {
      // else we compare current profit with maxProfit profit
      // and move the sell day to the next day
      maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
      sellDay++;
    }
  }

  return maxProfit;
}
