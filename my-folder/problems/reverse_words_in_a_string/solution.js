/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const alphaReg = /\S+/
    let outputStr = ''
    let i = 0, j = 0

    while(i < s.length) {
        if(alphaReg.test(s[i])) {
            j = i
            while(alphaReg.test(s[j+1]) && j < s.length) {
                j++
            }
            outputStr = `${s.slice(i, j+1)} ${outputStr}`
            i = j
        }
        i++
    }
    return outputStr.trimEnd()
};