/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// var lowestCommonAncestor = function(root, p, q) {
//     let lowestAcc = undefined;

//     const lowestCommonAncestorRec = (node, p, q) => {
//         if (!node) return false;
//         if (node === p || node === q) return true;

//         const left = lowestCommonAncestorRec(node.left, p, q);
//         const right = lowestCommonAncestorRec(node.right, p, q);

//         if ((left && right) || ((left || right) && (node === p || node === q))) {
//             if (lowestAcc === undefined) lowestAcc = node.val;
//         }

//         return left || right || (node === p || node === q);
//     };

//     lowestCommonAncestorRec(root, p, q);
//     return lowestAcc;
// };

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}