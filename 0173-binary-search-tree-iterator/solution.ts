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

var BSTIterator = function(root) {
    if(!root){
        this.data = [];
        return;
    }
    
    let visited = [];
    
    function traverse(node){
        if(node.left) traverse(node.left);
        visited.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    
    this.data = visited.reverse();
};


BSTIterator.prototype.next = function() {
    return this.data.pop();
};

BSTIterator.prototype.hasNext = function() {
    return this.data.length > 0 ;
};

