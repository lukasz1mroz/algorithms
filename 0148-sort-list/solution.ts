/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
    if(!head) return head

    let nums = []
    let start = new ListNode()
    let headNode = start

    while(head !== null) {
        nums.push(head.val)
        head = head.next
    }

    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length; i++) {
        start.val = nums[i]
        start.next = i === nums.length - 1 ? null : new ListNode()
        start = start.next
    }
    return headNode
};
