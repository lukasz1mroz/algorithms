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

function kthSmallest(root: TreeNode | null, k: number): number {
    let orderedVals = []

    function kthSmallestHelper(root, k) {
        if(root === null) return
        kthSmallestHelper(root.left, k)
        orderedVals.length < k && orderedVals.push(root.val)
        kthSmallestHelper(root.right, k)
    }

    kthSmallestHelper(root, k)
    return orderedVals[k-1]
};