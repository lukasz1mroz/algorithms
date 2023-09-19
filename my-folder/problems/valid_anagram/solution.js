/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false 
    }

    const sChars = {}
    const tChars = {}

    for(let i = 0; i < s.length; i++) {
      if(!sChars[s[i]]) {
        sChars[s[i]] = 1
      } else {
        sChars[s[i]]++
      }

      if(!tChars[t[i]]) {
        tChars[t[i]] = 1
      } else {
        tChars[t[i]]++
      }
    }

    for(let i = 0; i < Object.keys(tChars).length; i++) {
      if(tChars[Object.keys(tChars)[i]] !== sChars[Object.keys(tChars)[i]]) {
        return false
      }
    }
    return true
};