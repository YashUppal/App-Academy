const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {

        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.length;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this.length;

        // Time Complexity - O(1)
    }

    dequeue() {

        if(!this.length) {
            return null;
        }

        let currentHead = this.head.value;
        this.head = this.head.next;

        if(!this.head)
            this.tail = null;

        this.length--;
        return currentHead;

        // Time Complexity - O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}


// A - B - C - D
