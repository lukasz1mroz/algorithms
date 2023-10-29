/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    const sortedVals = []
    let minDiff = Infinity

    function getVals(root: TreeNode | null): void {
        if (!root) return
        getVals(root.left)
        sortedVals.push(root.val)
        getVals(root.right)
    }

    getVals(root)

    for(let i = 1; i < sortedVals.length; i++) {
        minDiff = Math.min(minDiff, sortedVals[i] - sortedVals[i-1])
    }

    return minDiff

};



            