class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // create a new node
    // if its empty, set the head and tail to new node
    // set the nodes pervious to null
    // set nodes next to null

    let newNode = new DoublyLinkedListNode(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

  }

  addToTail(val) {
    // create a new node
    // if linked list is empty, point head and tail to the node
    // else point the new node prev to tail
    // point the tail's next to the new node
    // point the tail to new node

    let newNode = new DoublyLinkedListNode(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }

}

module.exports = DoublyLinkedList;
