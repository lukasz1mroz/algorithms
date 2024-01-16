/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null && n === 1) return null
    
    let idx = 1
    let currHead = new ListNode(0, head)
    let currNode = currHead
    let delIdx
    
    while(currNode) {
        if(currNode.next === null) delIdx = idx - n + 1
        currNode = currNode.next
        idx++
    }

    idx = 1
    currNode = currHead

    while(idx < delIdx - 1) {
        currNode = currNode.next
        idx++
    }

    currNode.next = n >= 2 ? currNode.next.next : null

    return currHead.next
};