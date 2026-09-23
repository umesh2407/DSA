/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[min]) {
            min = i;
        }
        if (prices[i] - prices[min] > maxProfit) {
            maxProfit = prices[i] - prices[min];
        }
    }
    return maxProfit;
};