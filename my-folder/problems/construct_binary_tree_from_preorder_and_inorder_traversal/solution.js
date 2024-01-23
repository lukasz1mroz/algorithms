/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    const build = function(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        const rootIndex = indexMap.get(rootVal);
        const leftSubtreeSize = rootIndex - inStart;

        root.left = build(preStart + 1, preStart + leftSubtreeSize, inStart, rootIndex - 1);
        root.right = build(preStart + leftSubtreeSize + 1, preEnd, rootIndex + 1, inEnd);

        return root;
    };

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};