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
var levelOrder = function(root) {
    if (!root) return []
    
    let queue = [root]
    let output = []

    while (queue.length > 0) {
        let levelLen = queue.length;
        let currVals = []

        for (let i = 0; i < levelLen; i++) {
            let currNode = queue.shift()
            currVals.push(currNode.val)
            if(currNode.left) queue.push(currNode.left)
            if(currNode.right) queue.push(currNode.right)
        }
        output.push(currVals)
    }

    return output
};
