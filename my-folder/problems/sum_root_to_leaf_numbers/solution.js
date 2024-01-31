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
var sumNumbers = function(root) {
    let totalSum = 0

    let sumNumbersRec = (node, currSumStr) => {
        if(!node) return
        if(!node.left && !node.right) {
            currSumStr += node.val
            totalSum += parseInt(currSumStr)
            return
        }
        currSumStr += node.val
        sumNumbersRec(node.left, currSumStr)
        sumNumbersRec(node.right, currSumStr)
    }

    sumNumbersRec(root, '')
    return totalSum
};