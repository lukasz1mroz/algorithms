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

function isValidBST(root: TreeNode | null): boolean {
    function validate(root, lower: number, upper: number) {
        if (root === null) return true

        if((lower < root.val) && (root.val < upper)) {
            return validate(root.left, lower, root.val) && validate(root.right, root.val, upper)
        } else {
            return false
        }
    }

    return validate(root, -Infinity, Infinity)
};