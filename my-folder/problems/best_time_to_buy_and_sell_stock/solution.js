/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0]
    let profit = 0

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < low) {
            low = prices[i]
        }
        if(prices[i] - low > profit) {
            profit = prices[i] - low
        }
    }

    return profit
};