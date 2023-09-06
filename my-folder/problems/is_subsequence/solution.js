/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIdx = 0

    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[sIdx]) {
            sIdx++
        }
    }
    return sIdx === s.length
};