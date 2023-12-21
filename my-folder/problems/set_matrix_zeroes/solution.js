/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for(let i=0; i<matrix.length; i++) { 
    for(let j=0; j<matrix[0].length; j++) {
        if(matrix[i][j] === 0) {
            for(let k=0; k<matrix.length; k++) {
                if(matrix[k][j] !== 0) matrix[k][j] = 'x'
            }
            for(let k=0; k<matrix[0].length; k++) {
                if(matrix[i][k] !== 0) matrix[i][k] = 'x'
            }
        }
    }
  }  

  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[0].length; j++) {
         matrix[i][j] = matrix[i][j] === 'x' ? 0 : matrix[i][j]
    }
  }  
};