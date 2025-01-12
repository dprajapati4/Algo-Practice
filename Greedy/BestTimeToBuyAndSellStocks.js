// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Approach: Two Pointers
// We can use two pointers to keep track of the of the buy day and the sell day. We can initialize the buy day as the first day and the sell day as the second day. We can then loop through the array and move the pointers forward until the sellDay has reached the last item in the array. If the buyDay is less than the sellDay value we can check if the current profit is greater than the max profit. If it is we can set the max profit to the current profit. Otherwise we can move the buyDay pointer up to the sellDay pointer. Regardless to end this turn we move the sellDay pointer up. In the end we return the max profit.

const maxProfit = (prices) => {
  let buyDay = 0;
  let sellDay = 1;
  let maxProfit = 0;

  while (sellDay < prices.length) {
    if (prices[buyDay] < prices[sellDay]) {
      let profit = prices[sellDay] - prices[buyDay];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    } else {
      buyDay = sellDay;
    }
    sellDay++;
  }

  return maxProfit;
};
// BigO
// Time Complexity: O(n) -> one for loop
// BigO Space Complexity: O(1) -> storing the values in variables

// Brute Force Approach: Use a nested for loop, track the profit and maxProfit, update maxProfit as needed.

const maxProfitBF = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};
// BigO
// Time Complexity: O(n^2) -> use a nested for loop.
// Space Complexity: O(1) -> storing the values in variables
