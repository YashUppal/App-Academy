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

## Improving Time Complexity - Caching, Memoization and Tabulation


## Caching

Caching is the process of storing results of effort somewhere, and reusing those results instead of spending that effort again. Effort could be spent in making complex calculations, fetching large assets, making service requests and so on.

## Caching - Memoization

The process of keeping a `memo` of calculations is a form of caching, where the results are stored and a memo of the running log is kept.

## Caching - Tabulation

This is how you build the cache from the ground up. Creating a table of values to refer. Example would be to create a cache for fibonacci values

```js
let cache = {};

function fibTabulation(n) {
  cache[1] = 0;
  cache[2] = 1;

  for(let i = 3; i <= n; i++){
     cache[i] = cache[i-1] + cache[i-2];
  }
}

fibTabulation(100);

console.log(cache["100"],cache["10"],cache["50"]); // 218922995834555200000 34 7778742049
```

## Performance Gains

Comparison between a function that recursively calculates fibonacci number at n position with caching and without.

```js
let cache = {};

function fibonacci(a) {
  // console.log(cache);
  if(cache[a]) return cache[a];
  if(a === 1) return 1;
  if(a === 2) return 1;

  cache[a] = fibonacci(a-2) + fibonacci(a-1);
  return cache[a];
}

function fibonacciSlow(a) {
  if (a === 1) return 1;
  if (a === 2) return 1;

  return fibonacciSlow(a-1) + fibonacciSlow(a-2);
}

let start = Date.now();

let fib = fibonacci(42);

let end = Date.now();

console.log("Cached Version:",end - start,"ms");
console.log(fib);

start = Date.now();

let fibslow = fibonacciSlow(42);

end = Date.now();

console.log("Uncached Version:", end - start,"ms");
console.log(fibslow);

Cached Version: 0 ms ✔
267914296
Uncached Version: 11788 ms ❌
267914296

```

Uncached version takes 11788 ms where as cached one takes 0 ms !!!! 🤯

## Memoization, Tabulation and Dynamic Programming

All fall under the umbrella of caching. Utilise it for massive performance gains!


## Memoization of factorial

Converts algorithm's time complexity from 2^n to n

```js
function fastFib(n,memo={}) {

  if(n in memo) return memo[n];

  if(n === 1) return 1;
  if(n === 2) return 1;

  memo[n] = fastFib(n-1,memo) + fastFib(n-2,memo);

  return memo[n];
}

console.log(fastFib(50)); // returns almost instantly
```
## How to memoize?

Think of ways to store results of repetetive expensive computations and essentially, trade some memory for performance.

## The Memoization Formula

The memoization formula
Now that you understand memoization, when should you apply it? Memoization is useful when attacking recursive problems that have many overlapping sub-problems. You'll find it most useful to draw out the visual tree first. If you notice duplicate sub-trees, time to memoize. Here are the hard and fast rules you can use to memoize a slow function:

1. Write the unoptimized, brute force recursion and make sure it works.
2. Add the memo object as an additional argument to the function. The keys will represent unique arguments to the function, and their values will represent the results for those arguments.
3. Add a base case condition to the function that returns the stored value if the function's argument is in the memo.
4. Before you return the result of the recursive case, store it in the memo as a value and make the function's argument its key.

## Tabulation

Tabulation is the process of creating a table of results for reusing. The data structure used is mostly an array.

## Tabulation of Fibonacci

```js
function tabulatedFib(n) {
  let table = new Array(n);

  table[0] = 1;
  table[1] = 1;

  for(let i = 2; i < n; i++) {
    table[i] = table[i-1] + table[i-2];
  }

  // table : //[ 1,  1,  2,  3,  5, 8, 13, 21, 34, 55 ]

  return table[n];
}
```

The space taken is O(n) as the size of the array is 'n' and the runtime is also O(n) because the only major operation is the loop. We can also refactor this to use O(1) space, as at a given time only the last two entries are needed.

## Refactoring for O(1) Space

```js
function tabulatedFib(n) {
  let table = [1,1];

  if(n === 1) return 1;

  for(let i = 0; i < n-2; i++) {
    let [secondLast, last] = table;
    table = [last, secondLast + last];
  }

  console.log(table);// [ 34, 55 ]

  return table[1];
}

console.log(tabulatedFib(10)); // 55
```

## The Tabulation Formula

Here are the general guidelines for implementing the tabulation strategy. This is just a general recipe, so adjust for taste depending on your problem:

1. Create the table array based off of the size of the input, which isn't always straightforward if you have multiple input values
2. Initialize some values in the table that "answer" the trivially small subproblem usually by initializing the first entry (or entries) of the table
3. Iterate through the array and fill in remaining entries, using previous entries in the table to perform the current calculation
4. Your final answer is (usually) the last entry in the table

## Hashing

## What is a Hash Function?

A hash function is a function that given an input, will run a set of deterministic steps on the input, and return an output.

In simpler words, A hashing function will take an input and run a set of fixed steps on it to return a scrambled output. Given the same input, it will **always** return the same output

Unlike encryption, hashing works in one direction, there is no way to get the input back from the hashed output.

## A Simple Hash function

```js
function hash(str) {
  let hash = 0;

  for(let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i)
  }

  return hash;
}

// Same input, same output
simpleHash("Hello, world!");  // 1161
simpleHash("Hello, world!");  // 1161

// Different input, different output
simpleHash("ABC");            // 198
simpleHash("abc");            // 294

// Some different inputs can lead to the same outputs
simpleHash("ABCDEF");         // 405
simpleHash("ABBEEF");         // 405
simpleHash("zbeT");           // 405
```
The above function will always return the same output given the same input. There is also no way to determine the input from the output.

## Hash Table

Hash Table (or HashMap) is a data structure used to store data and provide fast retreival.

Some data is ran through a hashing function to get a hash, then that has is converted to an index and in an array at that index the data is stored.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Hash_table.svg">

To retrieve the data, we just get the hash and hash index and retrieve from the array.

## Performance Analysis

Hash functions are `O(n)` but if the input is reasonably sized (< 1000) then it can be considered `O(1)`. Modulo is an `O(1)` operation. Data retrieval is also `O(1)` as using the bucket index derived from hash, we can directly jump to the bucket with data.

Space complexity is O(n), as the space taken grows linearly with data.

## Hash Collisions

Hash collision is when the hashed index comes out to be of a bucket that already has some value.

## Resolving Hash Collsions

Hash Collision can be resolved with

 - Linked List Chaining
 - Array Resizing

## Sets

Set is an abstract data structure, that is just like an array, but has three differentiating factors:

- Only stores unique data
- Data is stored unordered
- Constant lookup time
