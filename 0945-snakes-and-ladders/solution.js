/**
 * @param {number[][]} board
 * @return {number}
 */

function snakesAndLadders(board) {
    const n = board.length;
    const moves = Array(n * n).fill(-1);
    const visited = Array(n * n).fill(false);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const num = n * i + j + 1;
            const quot = Math.floor((num - 1) / n);
            const rem = (num - 1) % n;
            const row = n - 1 - quot;
            const col = quot % 2 === 0 ? rem : n - 1 - rem;
            if (board[row][col] > 0) {
                moves[num - 1] = board[row][col] - 1;
            }
        }
    }

    const queue = [[0, 0]];
    visited[0] = true;
    while (queue.length > 0) {
        const [square, steps] = queue.shift();
        for (let i = 1; i <= 6; i++) {
            let nextSquare = square + i;
            if (nextSquare < n * n) {
                let nextSteps = steps + 1;
                if (moves[nextSquare] !== -1) {
                    nextSquare = moves[nextSquare];
                }
                if (nextSquare === n * n - 1) {
                    return nextSteps;
                }
                if (!visited[nextSquare]) {
                    visited[nextSquare] = true;
                    queue.push([nextSquare, nextSteps]);
                }
            }
        }
    }
    return -1;
}
