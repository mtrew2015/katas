//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//Example:
//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.

function Listnode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let current = result;
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum > 9 ? 1 : 0;
        sum = sum % 10;
        current.next = new ListNode(sum);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return result.next;
}
