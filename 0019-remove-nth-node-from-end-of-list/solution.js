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
    let length = 0
    let idx = 0
    let node = new ListNode(0, head)
    let currNode = node

    while(head) {
        head = head.next
        length++
    }

    while(currNode) {
        if(idx === length - n) {
            currNode.next = currNode.next.next
        }
        idx++
        currNode = currNode.next
    }
    
    return node.next
};
