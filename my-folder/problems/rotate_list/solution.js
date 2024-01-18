/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null 
  if (k === 0) return head
  
  let curr = head
  let nodes = []

  while(curr) {
    nodes.push(curr.val)
    curr = curr.next
  }  

  if (k === nodes.length) return head
  k = k > nodes.length ? k % nodes.length : k  
 
  let rotatedNodes = [...nodes.slice(nodes.length - k), ...nodes.slice(0, nodes.length - k)]
  let rotatedHead = new ListNode(rotatedNodes[0])
  let rotatedCurr = rotatedHead

  for(let i = 1; i < rotatedNodes.length; i++) {
      rotatedCurr.next = new ListNode(rotatedNodes[i])
      rotatedCurr = rotatedCurr.next
  }

  return rotatedHead
};