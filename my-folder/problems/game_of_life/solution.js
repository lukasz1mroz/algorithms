var gameOfLife = function(board) {

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let rowBeforeSum = board[i-1] ? (board[i-1][j-1] % 2 || 0) + board[i-1][j] % 2 + (board[i-1][j+1] % 2 || 0) : 0
            let rowAfterSum = board[i+1] ? (board[i+1][j-1] % 2 || 0) + board[i+1][j] % 2+ (board[i+1][j+1] % 2 || 0) : 0
            let totalSum = rowBeforeSum + rowAfterSum + (board[i][j-1] % 2 || 0) + (board[i][j+1] % 2 || 0)

            if(board[i][j] === 1 && (totalSum === 2 || totalSum === 3) || board[i][j] === 0 && totalSum === 3) {
                board[i][j] += 2
            }

        }
    }

    for(let k = 0; k < board.length; k++) {
        for(let l = 0; l < board[k].length; l++) {
            board[k][l] = board[k][l] >= 2 ? 1 : 0
        }
    }
};