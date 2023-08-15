class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // create a new node with the passed value
    // point the new nodes next to current head;
    // point the head to the new node

    let newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // it should not have a tail pointer

    // create a new node with the passed value
    // get the last node in the list
    // point the last node to the new node
    // point the new node to NULL
    let newNode = new LinkedListNode(val);

    if(this.length === 0) this.head = newNode;

    let current = this.head;

    while(current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = null;
    this.length++;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
