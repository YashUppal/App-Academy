// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Time Complexity - O(1)
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        // Time Complexity - O(1)
    }

    removeFromHead() {
        if(!this.length) {
            return;
        }

        let currentHead = this.head;
        this.head = this.head.next;
        if(this.head)
            this.head.prev = null;
        this.length--;
        return currentHead.value;

        // Time Complexity - O(1)
    }

    removeFromTail() {
        if(!this.length) {
            return undefined;
        }

        let currentTail = this.tail;
        this.tail = this.tail.prev;
        currentTail.prev = null;
        this.length--;
        return currentTail.value;
    }

    peekAtHead() {

        if(this.head) {
            return this.head.value;
        }

        return;

        // Time Complexity - O(1)
    }

    peekAtTail() {
        if(this.tail) {
            return this.tail.value;
        }

        return;

        // Time Complexity - O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
