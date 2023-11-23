/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    	let profitSum = 0
	    let sellPrice = prices[prices.length - 1]

	    for (let i = prices.length - 2; i >= 0; i--) {
	        if(prices[i] >= sellPrice) {
	            sellPrice = prices[i]
	        } else {
	            profitSum += (sellPrice - prices[i])
	            sellPrice = prices[i]
	        }
	    }
    return profitSum
};