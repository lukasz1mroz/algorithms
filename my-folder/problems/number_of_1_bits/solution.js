/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let oneBits = 0
    const bin = n.toString(2).padStart(32,'0')
    for(let i = 0; i <= 16; i++) {
        if(bin[i] === '1') {
            oneBits++
        }
        if(bin[bin.length +1 - i] === '1') {
            oneBits++
        }
    }
    return oneBits
};