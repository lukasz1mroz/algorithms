/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let result = n
    let digArr = []
    let count = 1

    while (result !== 1) {
        // Split number for digits
        digArr = result.toString().split('').map((dig) => parseInt(dig))
        // Get sum of digit squares
        sum = digArr.reduce((acc, curr) => acc + curr**2, 0)
        // Rurn false if ...?
        if (count > 1 && sum < 10 && sum !== 1) {
            return false
        }
        count++
        result = sum
    }
    return true
};