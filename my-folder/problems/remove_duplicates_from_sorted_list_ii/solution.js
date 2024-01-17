/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head)
    let curr = dummy

    while(curr && curr.next && curr.next.next) {
        let duplHead = curr.next
        let duplTail = curr.next.next

        if(duplHead.val === duplTail.val) {
            while(duplTail && duplHead.val === duplTail.val) {
                duplTail = duplTail.next
            }
            curr.next = duplTail
        } else {
            curr = curr.next
        }
    }

    return dummy.next || null
};