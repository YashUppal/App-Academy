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
# NgRx

## What is State

State is any data or information that the application tracks. It could be stuff that user sees on the UI, could be user information or something else that is received from a backend server somewhere.

## What is NgRx

NgRx is the Redux state manangement combined with Angular. The store is <i>immutable</i> and provides a single source of truth in the application.The Redux pattern goes like this

1) An event triggers and `Action`, which is dispatched to a `Reducer`
2) `Reducer` updates the store, rather, creates a new state with the new information and updates the store.
3) A `Selector` gets us a slice of the state from the store, and is subscribed in a component


<img src="https://i.pinimg.com/736x/d9/55/c1/d955c13ebd5b778bf788a539f878fc1f.jpg">

## Use NgRx When:

1) There is a need to manage complex state in a large application.

## Redux Principles

There are 3 Redux Principles we need to know about

1) Single source of truth called the store

2) Store is read only and only way to make changes is by dispatching actions

3) Store can only be changed by pure functions called Reducers

## Store is the single source of truth

Store is literally a giant JavaScript object. It can be thought of as a client side database.

## Actions

Actions are user events that can be dispatched. It has an action type and optionally takes some data.

Examples of Actions:

- User login
- Click of menu button on UI

```js
ACTION {
    type:'LOGIN',
    user: {username: "John", password: "secret"}
}
```

## Reducers

Reducers are pure functions that actually make the changes to the store, in response to some `Actions`

Examples of Reducers:

- set userDetails property on successful login
- set the menu visibility to true in response to a click

## Selectors

Selectors are like reusable queries of our store.

### What are pure functions?

Pure functions are functions, which with a given data, will always return a given data back, without any side effects.

```js
// Example of pure functions

function sum(a,b) {
    return a + b;
}

// when passed a = 1, b = 2, will always return 3
```

```js
// Example of impure functions

let c = 1;

function sum(a,b) {
    return a + b + c;
}

// has a dependency on an external variable c, which will affect the result
```

## Advantages of Redux Pattern

Having a centralized store for state management makes complex applications state management simpler and easier. Also might have performance benefits in terms of change detection. Also easier application state hydration from other sources.
