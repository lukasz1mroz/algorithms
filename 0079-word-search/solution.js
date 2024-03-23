/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let containsWord = false

    const searchWord = (i, j, idx) => {
        if(i < 0 || i === board.length || j < 0 || j === board[0].length || board[i][j] !== word[idx]) {
            return
        }

        if(idx === word.length - 1 && board[i][j] === word[idx]) {
            containsWord = true
            return
        }

        let tmp = board[i][j]
        board[i][j] = '#'

        searchWord(i, j + 1, idx + 1), searchWord(i + 1, j, idx + 1), 
        searchWord(i, j - 1, idx + 1), searchWord(i - 1, j, idx + 1)

        board[i][j] = tmp
    }

    for(let i = 0; i < board.length; i++) {
        if(containsWord === true) break
        for(let j = 0; j < board[i].length; j++) {
            if(containsWord === true) break
            if(board[i][j]) searchWord(i, j, 0)
        }
    }

    return containsWord
};
