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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return sumPaths(root, targetSum, null)
};

function sumPaths(root: TreeNode | null, targetSum: number, currSum: number | null) {    
    // What's the end case
    if (!root) {
        return false
    }

    if(!root.left && !root.right && currSum + root.val === targetSum) {
        return true
    }

    // What's the simpliest action
    currSum += root.val

    // How to shrink the problem
    return sumPaths(root.left, targetSum, currSum) || sumPaths(root.right, targetSum, currSum)
}
