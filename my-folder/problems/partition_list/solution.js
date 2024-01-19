/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before = new ListNode(0);
    let after = new ListNode(0);
    let before_curr = before;
    let after_curr = after;
    
    while(head !== null) {
        if(head.val < x) {
            before_curr.next = head;
            before_curr = before_curr.next;
        } else {
            after_curr.next = head;
            after_curr = after_curr.next;
        }
        head = head.next;
    }
    
    after_curr.next = null;
    before_curr.next = after.next;
    
    return before.next;
};