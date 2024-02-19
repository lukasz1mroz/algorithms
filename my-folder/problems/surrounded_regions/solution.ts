/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    if (!board || board.length === 0) return;
    let rows = board.length;
    let cols = board[0].length;

    for(let row = 0; row < rows; row++) {
        if(board[row][0] === 'O') explore(row, 0, board);
        if(board[row][cols - 1] === 'O') explore(row, cols - 1, board);
    }

    for(let col = 0; col < cols; col++) {
        if(board[0][col] === 'O') explore(0, col, board);
        if(board[rows - 1][col] === 'O') explore(rows - 1, col, board);
    }

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(board[row][col] === 'O') board[row][col] = 'X';
            if(board[row][col] === '1') board[row][col] = 'O';
        }
    }
};

function explore(row: number, col: number, board: string[][]): void {
    if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== 'O') {
        return;
    }

    board[row][col] = '1';

    explore(row, col-1, board);
    explore(row, col+1, board);
    explore(row-1, col, board);
    explore(row+1, col, board);
}