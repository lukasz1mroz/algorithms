var isValidSudoku = function(board) {
    let currRow = new Map()
    let currCol = new Map()
    let currBoxes = new Map()

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            let isDigitR = /\d/.test(board[r][c])
            let isDigitC = /\d/.test(board[c][r])
            if(!currRow.has(board[r][c])) {
                isDigitR && currRow.set(board[r][c], true)
            } else {
                return false
            }
            if(!currCol.has(board[c][r])) {
                isDigitC && currCol.set(board[c][r], true)
            } else {
                return false
            }
            if(c % 3 === 0 && r % 3 === 0) {
                currBoxes.set(`${r}-${c}`, new Map())
                let currBox = currBoxes.get(`${r}-${c}`)
                isDigitR && currBox.set(board[r][c], true)
            } else {
                let currBoxR = r < 3 ? 0 : r < 6 ? 3 : r < 9 ? 6 : r
                let currBoxC = c < 3 ? 0 : c < 6 ? 3 : c < 9 ? 6 : c
                let currBox = currBoxes.get(`${currBoxR}-${currBoxC}`)
                if(!currBox.has(board[r][c])) {
                    isDigitR && currBox.set(board[r][c], true)
                } else {
                    return false
                }
            }
        }
        currRow.clear()
        currCol.clear()
    }
    return true
}