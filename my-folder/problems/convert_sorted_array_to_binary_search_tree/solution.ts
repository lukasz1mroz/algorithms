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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const midIdx = Math.floor(nums.length / 2)
    if(nums.length === 1) return new TreeNode(nums[0])
    if(!midIdx) return null

    const root = new TreeNode(nums[midIdx])
    root.left = sortedArrayToBST(nums.slice(0, midIdx))
    root.right = sortedArrayToBST(nums.slice(midIdx + 1, nums.length))
    return root
};

// sortedArrayToBST([-10,-3,0,5,9])
    // sortedArrayToBST([-10,-3])
        // sortedArrayToBST([-10])
            //

