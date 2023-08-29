// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;

        // Time Complexity = O(1)
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Time Complexity - O(n)
    }

    removeFromHead() {
        if(!this.length) {
            return;
        }

        if(this.length === 1) {
            this.head = null;
            this.length--;
            return;
        }

        this.length--;
        let oldHead = this.head;
        this.head = this.head.next;
        return oldHead;

        // Time Complexity - O(1)
    }

    removeFromTail() {

        if(!this.length) {
            return;
        }

        if(this.length === 1) {
            this.head = null;
            this.length--;
            return;
        }

        let curr = this.head;

        while(curr.next.next) {
            curr = curr.next;
        }
        let oldTail = curr.next;
        curr.next = null;
        this.length--;
        return oldTail;

        // Time Complexity - O(n)

    }

    peekAtHead() {
        if(this.length)
            return this.head.value;

        return;

        // Time Complexity - O(1)
    }

    print() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
    // Time Complexity - O(n)
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
