# Data Structures and Algorithms

## Timing Benchmarks

The first step to increase code performance is to measure it. Because we don't know if something is increased or decreased if we don't measure.

We can use `console.time("timer")` inbuilt method or `Date.now()` method to time our code runtime.

```js
function addNums(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.time("addNums"); //
addNums(10000000);
console.timeEnd("addNums"); // addNums: 27.218ms

let start = Date.now();
addNums(10000000);
let end = Date.now();

console.log(`runtime: ${end - start} ms`); // addNums: 27.218ms

```
## JavaScript Array/Object mutations

In JavaScript, `array` or `objects` mutation in-place is more space efficient.

## Logic - XOR

The statement "I am either hungry, or happy", implies that if I am happy, I am not hungry, or if I am hungry, I am not happy. To represent this dichotomy, we use Exclusive OR -> XOR, represented by `^`

```
hungry  |  happy |
0          0        0 - not hungry and not happy - logical fallacy
0          1        1 - not hungry and happy - logical wrt statement
1          0        1 - hungry and not happy - logical wrt statement
1          1        0 - hungry and happy - logical fallacy
```

Also, can be represented by `(A && !B) || (!A && B)`

## Memory

** - Read the lecture. It's very interesting.

## Describe computer memory in 100 words or less. Treat this like a job interview question and aim to be as complete, yet concise as possible.

Memory in computers is just like memory in humans. It is used to store some data. The memory used to store the data for currently used programs is called RAM (Random Access Memory). Internally it works using a binary tree and is very fast. Think of memory as a long list of storage boxes, which can either store the data your program uses (variables etc) or references to other data (pointers to objects,arrays,string etc).

## Arrays

Arrays are a collection of same type of data stored in a contiguous memory block.

Array indexing is an **O(1)** operation, as it takes the same number of operations to access the first element as it takes to access the last element.

Read the lesson for more.

## `push()` vs `unshift()`

`unshift()` is a much much more expensive operation as compared to `push()`, as push is efficient by virtue of over allocation and other things whereas `unshift()` involves shifting the items of an array by 1 and that can be intense.

push() is an O(1) operation whereas unshift() is an O(n) operation because of how they work underneath.

```js
function addToBack(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.push(i+1);
    }
    return arr;
}

function addToFront(n) {
    const arr = [];
    for (let i = 0 ; i < n ; i++) {
        arr.unshift(n - i);
    }
    return arr;
}

let n = 100000;
let startBack = Date.now();
addToBack(n);
let endBack = Date.now();

let startFront = Date.now();
addToFront(n);
let endFront = Date.now();

console.log(`addToBack = ${endBack - startBack} ms`);
console.log(`addToFront = ${endFront - startFront} ms`);``

// addToBack = 17 ms
// addToFront = 2168 ms 🤯
```

## Linked List

A Linked List is a collection of nodes, where each node is pointing to the next one. In a singly linked list, the node points to the next one only, in doubly linked list, the node points to the next AND the previous one.

## Stack

Stack is a data structure that follows the `Last In, First Out` approach. E.g a call stack

## Queue

Queue is a data structure that follows the `First In, First Out` approach. E.g a message queue.

## Implementation

Stack and Queue can be implemented using linked lists and arrays.
for smaller `n`, we can use arrays. For large number of `n`, we can use the linked list implementation.
