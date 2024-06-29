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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxLevel = 0

    var maxDepthHelper = function(root, level) {
        if(!root) {
            maxLevel = Math.max(maxLevel, level)
            return
        }

        maxDepthHelper(root.left, level + 1)
        maxDepthHelper(root.right, level + 1)
    }

    maxDepthHelper(root, 0)

    return maxLevel
};
