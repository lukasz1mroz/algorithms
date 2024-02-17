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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let q = [root], res = [], level = 1
    while(q[0]) {
        let qlen = q.length, row = []
        for(let i = 0; i < qlen; i++) {
            let curr = q.shift()
            level % 2 === 0 ? row.push(curr.val) : row.unshift(curr.val)
            if(curr.right) q.push(curr.right)
            if(curr.left) q.push(curr.left)
        }
        level++
        res.push(row)
    }
    return res
};