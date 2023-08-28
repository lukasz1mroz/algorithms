/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strDone = false
    let length = 0
    let idx = s.length - 1

    while(!strDone && idx >= 0) {
        if(/\w/.test(s[idx])) {
            length++
            idx--
        } else if(/\s/.test(s[idx]) && length > 0) {
            strDone = true
        } else {
            idx--
        }
    }
    return length
};