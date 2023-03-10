# Advanced JavaScript Crash Course

## Scope

- Block Scope : Scope of a block of code within curly braces
- Function Scope : Scope of a method
- Global Scope : Scope of the entire document

In the below snippet, the `inner()` function can access the variables defined in the `outer()` function and variable defined in the global scope.

```javascript
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// Output: 10 20 30
```
## Closure

In JavaScript, when we return a function from within a function ,we are effectively returning a combination of the function definition and the function scope. This allows for the data in the scope to be persisted between function executions.

```javascript
function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}

const fn = outer();
fn();
fn();

// Output:
// 1
// 2
```

## Currying
<span style="color:red"><strong>**Revisit Concept!**</strong></span>

Currying in JS is a way of transforming functions to make them take one argument at a time.



```javascript
// Normal
someFunction(arg1, arg2 arg3);

// Curried
someFunctionCurried(arg1)(arg2)(arg3);
```

### Example:

```javascript
function multiply(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

console.log(multiply(2)(3)); // Output: 6
```
### Transformation:

```javascript
function multiply(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

multiply(2)(3) =>

function(num2) {
     return 2 * num2
    }(3)

2 * 3 => 6
```
