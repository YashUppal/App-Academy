const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Single Linked List - addToHead - O(1), addToTail - O(n)
// Doubly Linked List - addTohead - O(1), addToTail - O(1)

// Tests

// add to head

let llOne = new LinkedList();
let dllOne = new DoublyLinkedList();

for(let i = 0; i < 10000000; i++){
    llOne.addToHead(i);
    dllOne.addToHead(i);
}

let singlyLLA2HStart = Date.now();
llOne.addToHead("Added to SLL")
let singlyLLA2HEnd = Date.now();

let doublyLLA2HStart = Date.now();
dllOne.addToHead("Added to DLL")
let doublyLLA2HEnd = Date.now();

console.log(`Singly Linked List Add to Head benchmark - ${singlyLLA2HEnd - singlyLLA2HStart}ms`); // 0ms
console.log(`Doubly Linked List Add to Head benchmark - ${doublyLLA2HEnd - doublyLLA2HStart}ms`); // 0ms


// add to tail

let singlyLLA2TStart = Date.now();
llOne.addToTail("Added to SLL");
let singlyLLA2TEnd = Date.now();

let doublyLLA2TStart = Date.now();
dllOne.addToTail("Added to DLL");
let doublyLLA2TEnd = Date.now();

console.log(`Singly Linked List Add to Tail benchmark - ${singlyLLA2TEnd - singlyLLA2TStart}ms`); // 80ms
console.log(`Doubly Linked List Add to Tail benchmark - ${doublyLLA2TEnd - doublyLLA2TStart}ms`); // 0ms

// 🤯🤯🤯
