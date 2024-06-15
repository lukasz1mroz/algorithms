/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let longest = 0;
    let freq = new Array(26).fill(0);
    let maxCharCount = 0;

    for(let i = 0, j = 0; j < s.length; j++) {
        freq[s[j].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        maxCharCount = Math.max(maxCharCount, freq[s[j].charCodeAt(0) - 'A'.charCodeAt(0)]);
        if ((j - i + 1) - maxCharCount > k) {
            freq[s[i].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            i++;
        }
        longest = Math.max(longest, j - i + 1);
    }
    return longest;
};
