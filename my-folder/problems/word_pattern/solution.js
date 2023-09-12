/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(' ')

    if (pattern.length !== sArr.length || new Set(pattern).size !==  new Set(sArr).size) {
        return false
    }

    const map = {}

    for (let i = 0; i < pattern.length; i++) {
        if((map[pattern[i]] && map[pattern[i]] !== sArr[i]) || (pattern[i] !== pattern[i - 1] && sArr[i] === sArr[i-1])) {
            return false
        } else {
            map[pattern[i]] = sArr[i]
        }
    }

    return true
};