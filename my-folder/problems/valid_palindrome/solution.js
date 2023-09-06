/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const chars = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()
   for(let i = 0; i < chars.length/2; i++) {
       if(chars[i] !== chars[chars.length -1 -i]) {
           return false
       }
   }
   return true
};