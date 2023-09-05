/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const results = haystack.split(needle)
    return results[0] === '' ? 0 : results.length === 1 ? -1 : results[0].length
};