/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = null, max = null) {
    if(!root) return true

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false
    if (!isValidBST(root.left, min, root.val)) return false
    if (!isValidBST(root.right, root.val, max)) return false

    return true;
};
