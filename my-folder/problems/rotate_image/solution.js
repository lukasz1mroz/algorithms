/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    matrix.forEach(row => row.reverse())

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length - i - 1; j++) {
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[matrix.length-1-j][matrix.length-1-i]
            matrix[matrix.length-1-j][matrix.length-1-i] = tmp
        }
    }
};