/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows === 1) return s

  let rows = []
  let reverse = false
  let count = 0

  for(let i = 0; i < numRows; i++) rows[i] = ''  

  for (let j = 0; j < s.length; j++) {
    rows[count] += s[j]
    reverse === false ? count++ : count --
    if(count === numRows - 1 || count === 0) reverse = !reverse
  }

  return rows.reduce((converted, row) => converted + row, '')
};