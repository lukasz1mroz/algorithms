/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let result = n
    let digArr = []
    let count = 1

    while (result !== 1) {
        digArr = result.toString().split('').map(Number)
        sum = digArr.reduce((acc, curr) => acc + curr**2, 0)
        if (count > 1 && sum < 10 && sum !== 1) {
            return false
        }
        count++
        result = sum
    }
    return true
};