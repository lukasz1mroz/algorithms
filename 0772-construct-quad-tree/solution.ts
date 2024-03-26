/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    let sum = grid.reduce((total, subArr) => {
    return total + subArr.reduce((subTotal, num) => subTotal + num, 0);
}, 0);

    if(sum === grid[0].length ** 2 || sum === 0) {
        let quadLeaf  = new Node(sum === 0 ? false : true, true, null, null, null, null)
        return quadLeaf
    }
    
    let midIdx = grid.length / 2
    let topLeftGrid = grid.slice(0, midIdx).map(subarr => subarr.slice(0, midIdx))
    let topRightGrid = grid.slice(0, midIdx).map(subarr => subarr.slice(midIdx, subarr.length))
    let btmLeftGrid = grid.slice(midIdx, grid.length).map(subarr => subarr.slice(0, midIdx))
    let btmRightGrid = grid.slice(midIdx, grid.length).map(subarr => subarr.slice(midIdx, subarr.length))

    let quadNode = new Node(true, false, construct(topLeftGrid), construct(topRightGrid), construct(btmLeftGrid), construct(btmRightGrid))

    return quadNode
};
