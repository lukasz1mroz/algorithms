/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;
    
    let queue = [root];
    let tempQueue = [];
        
    while(queue.length){
        let curr = queue.splice(0, 1)[0];
        let {left, right} = curr;
                
        if (left) tempQueue.push(left);
        if (right) tempQueue.push(right);
        
        if (queue.length === 0){
            curr.next = null;
            queue = tempQueue;
            tempQueue = [];
        }else{
            curr.next = queue[0];
        }
    }
    
    return root;
};