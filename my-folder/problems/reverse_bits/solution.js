/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const bin = n.toString(2).padStart(32, '0')
    const binRev = bin.split('').reverse().join('')
    const revNum = parseInt(binRev, 2)
    return revNum
};