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
