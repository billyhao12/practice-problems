// Tutorial link: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data) // returns 5
console.log(list.size()); // returns 2, because there are two nodes in the list
console.log(list.getLast()); // returns the last ListNode object, in this case: ListNode { data: 5, next: null}
console.log(list.getFirst()); // returns the first ListNode object: ListNode { data: 2, next: ListNode { data: 5, next: null} }

list.clear(); // clears the list
console.log(list.size()); // returns 0, because the list has been cleared
