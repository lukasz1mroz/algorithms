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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return !subRoot;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function(s, t) {
    if (!s && !t) return true; // Both nodes are null, trees match
    if (!s || !t) return false; // One of the nodes is null, trees don't match
    if (s.val !== t.val) return false; // Node values differ, trees don't match
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right); // Recursively check subtrees
};
