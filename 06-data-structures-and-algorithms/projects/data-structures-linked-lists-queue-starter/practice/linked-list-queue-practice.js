// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        let length = 0;
        let curr = this.head;

        while(curr) {
            length++;
            curr = curr.next;
        }

        return length;

        // Time Complexity - O(1)
    }

    sumOfNodes() {
        let sum = 0;
        let curr = this.head;

        while(curr) {
            sum = sum + curr.value;
            curr = curr.next;
        }

        return sum;

        // Time Complexity - O(n)
    }

    averageValue() {
        let length = this.listLength();
        let sum = this.sumOfNodes();

        return sum / length;

        // Time Complexity - O(n) + O(n) => O(n)
    }

    findNthNode(n) {
        let index = 0;
        let curr = this.head;

        while(index < n) {
            index++;
            curr = curr.next;
        }

        return curr;

        // Time Complexity - O(n)
    }

    findMid() {
        // to find mid - startIndex + (endIndex - startIndex)/2
        let startIndex = 0
        let endIndex = this.listLength() - 1;

        let midIndex = Math.floor(startIndex + (endIndex - startIndex)/2);

        return this.findNthNode(midIndex);

        // Time Complexity - O(n) + O(1) + O(n) => O(n)
    }

    reverse() {
        let reversed = new SinglyLinkedList();
        reversed.addToTail(this.head.value);
        let current = this.head.next;
        while(current) {
            let newNode = new SinglyLinkedNode(current.value);
            newNode.next = reversed.head;
            reversed.head = newNode;
            current = current.next;
        }

        return reversed;

        // Time Complexity - O(n)
    }

    reverseInPlace() {
        let current = this.head;
        let previous = null;
        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;

        // Time Complexity - O(n)
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        let start = this.head;
        let end = this.tail;

        while(start !== end && start.next !== end) {
            start = start.next;
            end = end.prev;
        }

        return start;

        // Time Complexity - O(n)
    }

    reverse() {
        let reversed = new DoublyLinkedList();
        reversed.addToTail(this.head.value);

        let current = this.head.next;

        while(current) {
            let newNode = new DoublyLinkedNode(current.value);
            newNode.next = reversed.head;
            reversed.head = newNode;
            current = current.next;
        }

        return reversed;

        // Time Complexity - O(n)
    }

    reverseInPlace() {

        let current = this.head;
        let previous = current.prev;
        while(current) {
            let next = current.next;
            current.next = previous;
            if(current.next) {
                current.next.prev = current;
            }
            previous = current;
            current = next;
        }

        let headCopy = this.head;
        this.head = this.tail;
        this.tail = headCopy;

        // Time Complexity - O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
