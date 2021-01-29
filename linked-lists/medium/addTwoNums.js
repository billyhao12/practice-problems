/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

// Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Solution from this tutorial video: https://www.youtube.com/watch?v=1Spw7DEtB14
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let current = dummyHead;
    let carry = 0;
    
    while (p1 !== null || p2 !== null) {
        let x = (p1 !== null) ? p1.val : 0;
        let y = (p2 !== null) ? p2.val : 0;
        let sum = x + y + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (p1 !== null) {
            p1 = p1.next;
        }
        
        if (p2 !== null) {
            p2 = p2.next;
        }
    }
    
    if (carry > 0) {
        current.next = new ListNode(1);
    }
    
    return dummyHead.next;
};

// Test Case 1
const list1Node1 = new ListNode(2);
const list1Node2 = new ListNode(4);
const list1Node3 = new ListNode(3);
list1Node1.next = list1Node2;
list1Node2.next = list1Node3;

const list2Node1 = new ListNode(5);
const list2Node2 = new ListNode(6);
const list2Node3 = new ListNode(4);
list2Node1.next = list2Node2;
list2Node2.next = list2Node3;

console.log(addTwoNumbers(list1Node1, list2Node1)); // [7, 0, 8]

// Test Case 2
const list3Node1 = new ListNode(0);
const list4Node1 = new ListNode(0);

console.log(addTwoNumbers(list3Node1, list4Node1)); // [0]

// Test Case 3
const list5Node1 = new ListNode(9);
const list5Node2 = new ListNode(9);
const list5Node3 = new ListNode(9);
const list5Node4 = new ListNode(9);
const list5Node5 = new ListNode(9);
const list5Node6 = new ListNode(9);
const list5Node7 = new ListNode(9);
list5Node1.next = list5Node2;
list5Node2.next = list5Node3;
list5Node3.next = list5Node4;
list5Node4.next = list5Node5;
list5Node5.next = list5Node6;
list5Node6.next = list5Node7;

const list6Node1 = new ListNode(9);
const list6Node2 = new ListNode(9);
const list6Node3 = new ListNode(9);
const list6Node4 = new ListNode(9);
list6Node1.next = list6Node2;
list6Node2.next = list6Node3;
list6Node3.next = list6Node4;

console.log(addTwoNumbers(list5Node1, list6Node1)); // [8,9,9,9,0,0,0,1]
