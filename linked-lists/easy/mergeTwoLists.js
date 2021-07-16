/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null;

    let l1Pointer = l1;
    let l2Pointer = l2;
    
    let l3 = new ListNode();
    let l3Pointer = l3;
    
    let numbers = [];
    
    while (l1Pointer) {
        numbers.push(l1Pointer.val);
        l1Pointer = l1Pointer.next;
    }
    
    while (l2Pointer) {
        numbers.push(l2Pointer.val);
        l2Pointer = l2Pointer.next;
    }
    
    numbers.sort((a, b) => a - b);
    
    for (let i = 0; i < numbers.length; i++) {
        l3Pointer.val = numbers[i];
    
        if (!(i === numbers.length - 1)) {
            l3Pointer.next = new ListNode();
            l3Pointer = l3Pointer.next; 
        }
    }
    
    return l3;
};

// Override `toString()` method
ListNode.prototype.toString = function listNodeToString() {
    const arrayRepresentation = [];
    let pointer = this;
    while (pointer) {
        arrayRepresentation.push(pointer.val);
        pointer = pointer.next;
    }
    return arrayRepresentation;
}

// Test Case 1
const list1Node1 = new ListNode(1);
const list1Node2 = new ListNode(2);
const list1Node3 = new ListNode(4);
list1Node1.next = list1Node2;
list1Node2.next = list1Node3;

const list2Node1 = new ListNode(1);
const list2Node2 = new ListNode(3);
const list2Node3 = new ListNode(4);
list2Node1.next = list2Node2;
list2Node2.next = list2Node3;

console.log(mergeTwoLists(list1Node1, list2Node1).toString()); // [1,1,2,3,4,4]

// Test Case 2
const list3Node1 = new ListNode(null);
const list4Node1 = new ListNode(null);

console.log(mergeTwoLists(list3Node1, list4Node1).toString()); // []

// Test Case 3
const list5Node1 = new ListNode(null);
const list6Node1 = new ListNode(0);

console.log(mergeTwoLists(list5Node1, list6Node1).toString()); // [0]
