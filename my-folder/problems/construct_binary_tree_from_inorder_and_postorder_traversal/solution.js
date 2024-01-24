/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {
    if (!inorder || !postorder || inorder.length === 0 || postorder.length === 0) return null;

    const build = function(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return null;

        const head = new TreeNode(postorder[postEnd]);
        const midIdx = inorder.indexOf(postorder[postEnd]);

        const leftSubtreeSize = midIdx - inStart;

        head.left = build(inStart, midIdx - 1, postStart, postStart + leftSubtreeSize - 1);
        head.right = build(midIdx + 1, inEnd, postStart + leftSubtreeSize, postEnd - 1);

        return head;
    };

    return build(0, inorder.length - 1, 0, postorder.length - 1);
};