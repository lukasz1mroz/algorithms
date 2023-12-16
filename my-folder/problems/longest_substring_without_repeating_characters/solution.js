/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let left = 0
    let right = 0
    let elems = new Map()

    while(right < s.length) {
        let duplIdx = elems.get(s[right])
        if (duplIdx !== undefined && duplIdx >= left) {
            longest = right - left > longest ? right - left : longest
            left = duplIdx + 1
        }
        elems.set(s[right], right)
        right++
    }

    return right - left > longest ? right - left : longest
};