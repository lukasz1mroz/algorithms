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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const queue = []
    const right = []

    if(root === null) return right

    queue.push(root)
    while(queue.length !== 0) {
        let levelLength = queue.length

        for(let i = 0; i < levelLength; i++) {
            let curr = queue.shift()
            if(i === levelLength -1) right.push(curr.val)
            if(curr.left !== null) queue.push(curr.left)
            if(curr.right !== null) queue.push(curr.right)
        }
    }
    return right
};