/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let sumTot = []
    let head = null
    let currNode = null

    while(l1 || l2) {
        let currSum = ((l1?.val || 0) + (l2?.val || 0) + carry) % 10
        carry = (l1?.val || 0) + (l2?.val || 0) + carry >= 10 ? 1 : 0
        sumTot.push(currSum)
        l1 = l1?.next || null 
        l2 = l2?.next || null
    }
    carry === 1 && sumTot.push(carry)

    for(let i = 0; i < sumTot.length; i++) {
        const newNode = new ListNode(sumTot[i]);
        
        if (head === null) {
            head = newNode;
            currNode = newNode;
        } else {
            currNode.next = newNode;
            currNode = newNode;
        }
    }

    return head
};