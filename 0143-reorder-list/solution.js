/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let vals = []
    
    while(head) {
        vals.push(head)
        head = head.next
    }

    let newHead = new ListNode(-1)
    let curr = newHead
    let mid = Math.floor(vals.length / 2)

    for(let i = 0; i < mid; i++) {
        curr.next = vals[i];
        curr = curr.next;
        curr.next = vals[vals.length - 1 - i];
        curr = curr.next;
    }

    if (vals.length % 2 !== 0) {
        curr.next = vals[mid];
        curr = curr.next;
    }

    curr.next = null

    return newHead.next
};
