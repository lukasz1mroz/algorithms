var spiralOrder = function(matrix) {
    const [h, w] = [matrix.length, matrix[0].length]
    let [top, bottom, left, right] = [0, h - 1, 0, w - 1]
    let arr = []

    while(left<=right && top<=bottom) {
        for(let i=left; i<=right; i++) arr.push(matrix[top][i])
        top++;

        for(let i=top; i<=bottom; i++) arr.push(matrix[i][right])
        right--;

        if(top<=bottom){
            for(let i=right; i>=left; i--) arr.push(matrix[bottom][i])
            bottom--;
        }

        if(left<=right){
            for(let i=bottom; i>=top; i--) arr.push(matrix[i][left])
            left++;
        }
    }

    return arr
};