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
var averageOfLevels = function(root) {
    let queue = [root]
    let avgs = []

    while(queue.length) {
        let sum = 0
        let levelLength = queue.length

        for(let i = 0; i < levelLength; i++) {
            let curr = queue.shift()
            sum+= curr.val

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        avgs.push(sum / levelLength)
    }
    return avgs
};