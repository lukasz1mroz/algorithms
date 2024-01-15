/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
     if(head === null) return null
     if(left === right) return head
     
     let dummy = new ListNode(0)
     dummy.next = head

     let leftPre = dummy
     let currNode = head

    for(let i = 0; i < left - 1; i++) {
        leftPre = leftPre.next
        currNode = currNode.next
    }

    let subListHead = currNode
    let preNode = null

    for(let i = 0; i <= right - left; i++) {
        let nextNode = currNode.next
        currNode.next = preNode
        preNode = currNode
        currNode = nextNode
    }

    leftPre.next = preNode
    subListHead.next = currNode

    return dummy.next
};