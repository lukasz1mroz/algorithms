/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
    .split(' ')
    .map(word => word.trim())
    .filter(w => w.length > 0)
    .reverse()
    .join(' ')
};