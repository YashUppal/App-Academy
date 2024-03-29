# Intermediate JavaScript

## Node

Node is a runtime environment for JavaScript built on top of Chrome V8 JavaScript Engine.

## Pair Programming

Programming in a pair, one person taking up a role of the navigator ( deciding implementation details, design and the logic) and the driver (typing out code)

## Human Centric Language vs Code Centric Language

Depersonalize your language for empathy, better communication and understanding. ***You are not your code.***

## JavaScript Objects

Object is a type of data structure that stores some data in key-value pairs. Equivalent to maps, dictionaries and associative arrays. They stored data unordered.

```javascript
let myObject = {};

myObject.name = "cool object";

myObject.name; // "cool object"

myObject.doesntExists; // undefined
```

To 'key' into our object, we can use dot notation or bracket notation.
Bracket notation let's us use variables to key into objects, dot notation doesn't. Whereas, dot notation is simpler to write.

```javascript
let car = {
    "name" : "harrier",
    "color": "black",
    "seats" : "6"
}

car.name; // "harrier"
car["color"]; // "black"

let seatVar = "seats";

car[seatVar]; //
```

If a value doesn't exist in an object, keying into it will return 'undefined'

To check if a key exists in JavaScript, the modern way is to use the 'in' keyword.

```javascript
let car = {
    "name" : "harrier",
    "color" : "black"
}

"color" in car; // true
"weight" in car; // false
```

## Associativity

When code is evaluated **right-to-left**, its called right associativity.

```javascript
a = b = 1;

// first, 1 is assigned to b,
// it returns 1
// then value of b, i.e. 1 is assigned to a
```

Assignment of variables take lowest precedence.

When code is evaluated **left-to-right**, its called left associativity.

```javascript
let id = 'header';

let element = document.getElementById(id).value;
```

Here, variable assignment, as usual takes lowest precedence, hence first the expression `document.getElementById(id)` is evaluated, then from the resolved value, the `.value` is resolved. Then at last, the resolved value is assigned to element.

Also, the resolution of variables to their values, happens before the operation starts.

The concepts above are intuitive. Don't worry too much about them.

## Methods vs Functions

Function is a procedure of code (some functionality) wrapped together, that can be reused. In Short, its some functionality.

Method is a function that belongs to an object.

It's just jargon.

```javascript

let dog = {
    "name" : "Hound",
    "age" : 3,
    "bark" : function() {
        console.log("GRRRR...BHOWW");
    }
}

dog.bark(); // "GRRRR...BHOWW"

// bark method of the dog object.
```

## Useful Object Methods

-   To get all the keys in an object in form of an array, use `Object.keys(objectName);`

- To get all the values in an object in form of an array, use `Object.values(objectName);`

- To iterate over keys in an object, use `for (let key in objectName)`

- To get a two dimensional array, with key-value pairs of an object, use `Object.entries;`

```javascript
let roboDragon = {
  "name" : "Titanox Pyrostorm 7000",
  "abilities" : ["Fire Breath","Aviation","Napalm"],
  "age" : "7 Million Years",

  "warcry": function() {
    console.log("RHAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }
}

for(let key in roboDragon) {
  console.log(key);
}

console.log(Object.entries(roboDragon));

console.log(Object.keys(roboDragon));

console.log(Object.values(roboDragon));

// Output:

name
abilities
age
warcry
[
  [ 'name', 'Titanox Pyrostorm 7000' ],
  [ 'abilities', [ 'Fire Breath', 'Aviation', 'Napalm' ] ],
  [ 'age', '7 Million Years' ],
  [ 'warcry', [Function: warcry] ]
]
[ 'name', 'abilities', 'age', 'warcry' ]
[
  'Titanox Pyrostorm 7000',
  [ 'Fire Breath', 'Aviation', 'Napalm' ],
  '7 Million Years',
  [Function: warcry]
]
```
## Primitive vs Reference Types


Primitive Data Types are types which are immutable, that means, on re-assignment, they take up new memory places.

Reference Types are data types which are mutable, i.e they take up the same memory location.

**M**emory == **M**utable

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/assets/assignment-num1.png)

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/assets/assignment-num2.png)

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/assets/assignment-num3.png)

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/assets/assignment-num5.png)

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/pojo/assets/assignment-num4.png)

```javascript
// Primitive
let first = true;
let second = first;

first = false;

console.log(first); // false
console.log(second); // true

// Reference

let cat1 = {"name" : "Felix", "age" : 3};
let cat2 = cat1;

cat1.age = 4;

console.log(cat1); // {"name" : "Felix", "age" : 4}
console.log(cat2); // {"name" : "Felix", "age" : 4}
```
Note - Arrays are also reference types, as under the hood, arrays are objects.

## Rest vs Spread

Rest Operator - Captures all the arguments and condenses them into a single array

Spread Operator - Spreads the iterable (Array, Object, String) into its composed elements

### Rest

```javascript
//Rest

function adder(firstNum, ...restArgs) {
  console.log(`First argument is ${firstNum}`);
  console.log(`Rest of the arguments are ${rest}`);

  return restArgs.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  },initialValue = firstNum)
}

console.log(adder(1,2,3,4,5,6,7,8));

// Output

First argument is 1
Rest of the arguments are 2,3,4,5,6,7,8
36
```

### Spread

```javascript
let str = "cool string";
let arr = [1,2,3,4,5];

let filter1 = {"category":"Electronics"};
let filter2 = {"sortedBy": "lowToHigh"};

let newArr = [...arr,6,7,8,9];
let anotherArr = [...str];
let finalFilter = {...filter1, ...filter2};

console.log(newArr);
console.log(anotherArr);
console.log(finalFilter);

// Output

[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
[
  'c', 'o', 'o', 'l',
  ' ', 's', 't', 'r',
  'i', 'n', 'g'
]
{ category: 'Electronics', sortedBy: 'lowToHigh' }
```

### Spread can be used to pass iterables to functions as individual arguments

```javascript

function colorPicker(color1, color2, color3) {
  console.log(`The colors are ${color1}, ${color2} and ${color3}`);
}

let colors = ["indigo","violet","purple"];

colorPicker(..colors); // "The colors are indigo, violet and purple"

```

To summarise, spread will expand and rest will collect.

## Destructuring

Destructuring let's us simplify our code by de-structuring a data structure like array or object, and assigning values to variables

```javascript

let animals = ["cat","dog","fish","rat"];

let [animal1,animal2] = animals;

console.log(animal1); // cat
console.log(animal2); // dog


let obj = {
  "name" : "John Doe",
  "jobs" : {
    "first":"Front End Engineer",
    "second":"Full Stack Engineer",
    "third":"Web Architect"
  }
}

let { name, jobs:{ first, second }} = obj;

console.log(name);
console.log(first);
console.log(second);

// Output
// John Doe
// Front End Engineer
// Full Stack Engineer
```

### Destructuring and Rest

```javascript

let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...restOfFoods] = foods;

console.log(firstFood,secondFood,restOfFoods); // pizza ramen [ 'sushi', 'kale', 'tacos' ]

let { a, c, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // => 1
console.log(c); // => 3
console.log(obj); // => { b: 2, d: 4 }

```

### Destructring and Function Arguments

```javascript

  let cat = {name:"Daisy",breed:"Beagle",owner:"John"};

  function dogTag({name,owner}) {
    console.log(`${owner} is the owner of ${name}`);
  }

  dogTag(cat);


```

```javascript
let bigCat = {
  name: "Jet",
  owner: { name: "Rose" },
  toys: ["ribbon"],
  siblings: { name: "Freyja", color: "orange", toys: ["mouse", "string"] }
};

// Aliased object destructuring

function toyFinder({toys,siblings:{toys:siblingToys}}) {
  let allToys = toys.concat(siblingToys);
  console.log(`all toys are: ${allToys}`);
}

toyFinder(bigCat); // all toys are: ribbon,mouse,string

```
## Callbacks

A callback is a function that is passed to another function as an argument. A callback can be named function, anonymous function or built in function.

```javascript
function sayHello(callback) {
  console.log("Hi");
  callback();
  console.log("Hello");
}

function itsACallBack() {
  console.log("It's a callback");
}

sayHello(itsACallBack);

// Output

// Hi
// It's a callback
// Hello
```

```javascript
// Anonymous Callback

function addAndDouble(num1,num2,cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  console.log(result);
}

addAndDouble(1,2,function(num) {
  return num * 2;
}) // 6
```

```javascript
// Build in functions passed as callbacks

function addAndSqroot(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);

  console.log(result);
}

addAndSqroot(9,9,Math.sqrt); // 4.242640687119285

```
## Functions as First Class Objects

First Class Objects in programming are objects that enjoy same privileges as other objects. In JavaScript, numbers, booleans etc are first class objects.

Three Criteria for something to be a first class object:

1) Can be stored in a variable
2) Can be passed in as argument
3) Can be returned from a function

In JavaScript, **Functions fulfill the above criteria, hence functions are first class objects in JavaScript.**

**Higher Order Functions** - are functions that operate on other functions, either as passed in arguments or return values.

## Scopes

Scope is an area of where a variable is accessible.

### Global Scope

`window` object in browser and `global` object in node. It is the scope which is available everywhere, i.e, a variable defined here will be available globally.

### Local Scope

Scope inside of a function. A function definition has a scope of its own.

### Block Scope.

Scope inside of a block. A block is the area between `{}`. Examples - `if`,`else`,`while` etc.

## Scope Chaining

JavaScript will keep looking for references in the accessible outer scopes, until it finds a matching reference. This is called ***scope chaining***. Inner scope can access the variables in outer scope, but the other way round is not true. In Short, Scope chaining allows code within in an inner scope to access variables declared in the outer scope.

## Lexical Scope

Lexical Scope is determined at lexing time so we can determine the values of variables without having to run any code. When you run some JavaScript code, it is parsed before it is run. This is called lexing time.

```javascript

function outer() {
  let x = 5;

  function inner() {
    // here we know the value of x because scope chaining will
    // go into the scope above this one looking for variable named x.
    // We do not need to run this code in order to determine the value of x!
    console.log(x);
  }
  inner();
}

```
## Variables

In JavaScript, there are three main ways to declare a variable.

1) `const` - To declare a constant. A constant cannot be re-assigned, it's value is fixed. Note, that the name binding in immutable, but if a const stores a reference type value (e.g object), it is still mutable. `const` are block scoped.

2) `let` - To declare a re-assignable variable. Variables declared with let are block scoped.

3) `var` - Older syntax to declare a variable. `var` are function scoped.

**Hoisting** - The mechanism of JavaScript that will ***hoist*** the variable declarations to the top of its scope is called hoisting.

`let` and `const` are also hoisted, but they are hoisted without a default value initialization, hence they throw an error when tried to access before initialization.

## Temporal Dead Zone

Variables declared using `let` and constants declared using `const` are not initialized until their definitions are evaluated. In other words, the time before a `const` or `let` is declared, but not used is called TDZ.

Note - The error thrown by a let variable in the temporal dead zone takes precedence over any scope chaining that would attempt to go to the outer scope to find a value for the variable.

## Function Scope vs Block Scope

```javascript
function partyMachine() {
  var string = "party";

  if(true) {
    var string = "bummer";
  }

  console.log(`This is a ${string}`); // This is a bummer
}

// Explanation:

// var is function scoped, so the re-definition sticks and overrides the previous definition. This function-scoped behaviour of var can cause confusing bugs


```

```javascript
function partyMachine() {
  var string = "party";

  if(true) {
    let string = "bummer";
  }

  console.log(`This is a ${string}`); // This is a party

  // Explanation

  // As let is block scoped, it exists isolated inside the block and doesnt overwrite the existing definiton.
}
```
## Global Variables

Defining variables without declaring puts them in global scope. This is bad practice, do not use global variables! Create variables with a defined scope to create self-contained functions. Global Variables === Sloppy Code.

```javascript
function globalVarsBad() {
  let x = "not global";
  y = "super mega global variable bad practice";
}

console.log(y); // super mega global variable bad practice
```
## Arrow Functions

```javascript
const arrowGreet = (name) => {
  return `Hello ${name}`;
}

const arrowGreetConcise = name => `Hello ${name}`;

console.log(arrowGreet("John Doe"));
console.log(arrowGreetConcise("John Doe Concise"));

// Hello Honey Singh
// Hello Honey Singh Concise
```

## Closures

Closure is the combination of a function bundled together with its surrounding state (lexical environment). In other words, closures give you access to an outer function's scope from an inner function.

In simpler words, a closure is when an inner function uses, or changes variables in an outer function

State + some functionality, will get stored in a variable.

```javascript
function treeMaker() {
  let trees = [];

  function addTree(tree) {
    trees.push(tree);
    return trees;
  }

  return addTree;
}

const treeFunc = treeMaker();
treeFunc('Pine'); // ['Pine']
```
Another example for private state creation with closures

```javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

let counterOne = createCounter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3

let counterTwo = createCounter();
console.log(counterTwo()); // 1  🤯🤯
```
The `count` variables has been **closed-over** or **captured** by the anonymous function.

## Call Stack

In JavaScript, Call stack is a structure that keeps track of functions executions. It is called a stack because functions are either stacked on top or popped out from the top.

## Recursion

Recursion is when a function calls itself. It is used to do something repeatedly.

A recursive function has to have a:

1) Base Case - Situation when the function returns and stack frames have to start popping out.

2) Recursive Case - Situation when the function has to ***recurse***,i.e call itself.

<a href="https://www.youtube.com/watch?v=Mv9NEXX1VHc">What on Earth is Recursion? - Computerphile</a>


## Default Parameters

Parameters in function definitions which are provided some default values are called default parameters. Argument can be passed that will override the default parameter, if not passed, default value for that parameter will be considered.

Use Cases: To create flags in programs. Also can be used in recursion.

```javascript
function adder(num,add = 5) {
  return num + add;
}

adder(10); // 15
adder(10,2); // 12

```

## IIFE

Immediately Invoked Function Expressions are anonymous functions that are defined and immediately invoked. They can never be called again, the variables defined inside them can never be accessed once the function invokes and completes. Basically, they're like one shot functions that run only once. Ever.

```javascript
(function() {
  const name = "John";
  console.log(name);
})(); // "John"

// There's no way to call the iife again, or access the const
console.log(???)
console.log(name) // ERROR
```

## Variable Hoisting Recall

Variables declared with `var` are hoisted to the top of their scope.

Variables declared with `let` and `const` are not hoisted because they are stuck in **Temporal Dead Zone**, meaning, they cannot be used until they have been assigned a value.


`let` and `const` are also hoisted, but they are hoisted without a default value initialization, hence they throw an error when tried to access before initialization.


## Function Hoisting - Function Declaration

Functions defined with Function Declaration syntax are hoisted to the top of the scope.

```javascript
hello(); // "Hey There!"

function hello() {
  console.log("Hey There!");
}
```
## Function Hoisting - Function Expression - var

Functions declared with Function Expression syntax with a `var`, get in a conflict. The `var` variable declaration is hoisted to the top of the scope and thus calling it as a function results in a confusion.

```javascript

hello(); // error: hello is not a function

var hello = function() {
  console.log("Hey There!");
}
```

## Function Hoisting - Function Expression - let

Functions declared with Function Expression syntax using `let` are not hoisted, and thus accessing the function results in a ReferenceError.

```javascript

helloAgain(); // ReferenceError, cannot access 'helloAgain' before initialization

let helloAgain = function() {
  console.log("Hey There Again!"):
}

```

## Function and Variable Hoisting - const and let

*things* declared with `const` and `let` have their names reserved and cannot be reused.

```javascript

const hello = "This is a variable.";

function hello() {
  console.log("This is a function");
}

hello(); // SyntaxError: Identifier 'hello' has already been declared

```

## Function and Variable Hoisting - var declaration and definition

Variable declaration and definition trumps the function declaration

```javascript

var hello = "This is a variable";

function hello() {
  console.log("This is a function");
}

console.log(hello); // This is a variable

```

## Function and Variable hoisting - var declaration only

function declaration will trump variable declaration only if its not being defined

```javascript
var hello;

function hello() {
  console.log("This is a function");
}

console.log(hello); //[Function: hello];
```

## Hoisting Summary and Takeaway

- Important Takeaway 1: Functions declared with Function Expression Syntaxt (`function someFunc() {}`) will be hoisted to the top of the scope.

- Important Takeaway 2: Use `const` and `let` and be careful while using `function someName()` syntax.

- Function Expression Syntax
  - `var` - `var` variables are hoisted and cause name conflicts (not a function error)
  - `let` and `const` - not hoisted and the name gets reserved, hence cause ReferenceError

## Default Values of Variables

`let` and `var` variables have a default value of `undefined`. `const` have to have a value while declaring the variable.

## Primitive Data Types

Primitive data types in JavaScript are not objects and thus they do not have methods.

Primitives:
  1) Number
  2) String
  3) Boolean
  4) Symbol
  5) Undefined
  6) Null
  7) BigInt

Reference:
  1) Object

In Summary, Primitive data type are data types which are immutable, meaning they cannot be changed, they can only be reassigned from one memory location to another, AND they do not have methods, as only Objects have methods and they are not Objects.

## Why are functions first class objects in JavaScript?

First Class Objects in JavaScript are things which can be:

- Stored in a variable
- Passed to a function as argument
- Returned from a function

Since functions can do all of the above, functions are considered first class objects in JavaScript.

## Thread

Thread of Execution is a sequence of command. JavaScript is a single threaded language.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/asynchronous-functions/assets/threading.png">

## JavaScript Event Loop

We are familiar with the `call stack`, which keeps track of things that are currently in progress.

There is another part of Event Loop called `message queue` that keeps track of things that cannot be executed right now, but will be executed once the current process completes.

JavaScript follows the principle of `run to completion`, meaning nothing can interrupt a currently in progress process in JavaScript.

`messages` are added to the `message queue` when an event occurs in JavaScript, and they are queued and executed in order.

To process something asynchoronously, and add it to the message queue, call it in a setTimeout.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop">MDN Documentation</a>

## Intro to Asynchronous JS

Asynchronous code is when we can **execute another command while a command already in progress**, and as a consequence, it does not have a guarantee of order of execution. Example, callback code inside a `setTimeout` or `setInterval`

Synchronous code is code that has a guarantee of order of execution.

## Timeouts

`setTimeout` can be used to execute a function callback after a given delay in ms and it can except unlimited number of arguments, and `setInterval` can be used to execute a function callback repeatedly after a given delay in ms, and it also takes an unlimited number of arguments.


```javascript

  const foodArg = (...arg) => {
    console.log(`I want ${arg.join(",")}`);
  }

  setTimeout(foodArg, 2000, "pancake","fries","coffee");
  setInterval(foodArg, 2000, "pancake","fries","coffee");

// I want pancake,fries,coffee -> setTimeout
// I want pancake,fries,coffee
// I want pancake,fries,coffee
// I want pancake,fries,coffee
// I want pancake,fries,coffee
// I want pancake,fries,coffee
// I want pancake,fries,coffee

```

## Clearing Timeouts

`clearInterval` and `clearTimeout` can be used to clear timeouts

```javascript
  const foodArg = (...arg) => {
    console.log(`I want ${arg.join(",")}`);
  }

  setTimeout(foodArg, 2000, "pancake","fries","coffee");
  const interval = setInterval(foodArg, 2000, "pancake","fries","coffee");

  function clear() {
    clearInterval(interval);
  }

  setTimeout(clear,20000);

  //will clear the interval after 20000 ms

```

## Timeouts are Asynchronous!

Timeouts are async and non blocking. Look at the example below


```javascript

console.log("foo");

setTimeout(()=>console.log("bar"),100);

console.log("baz");

setTimeout(()=>console.log("fizz"),0);

console.log("buzz");

// Output
  "foo"
  "baz"
  "buzz"
  "fizz"
  "bar"
```

**Also, the delay argument in ms passed to a timeout or interval is not an exact time, it is the <i>minimum</i> time in milliseconds after this the callback could be executed!**
___

## User Input with Readline

'readline' module can be used to read user input asynchonously

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's up?", answer1 => {
  console.log("You responded:" + answer1);
})

```

## `question` is asynchronous
As the question method used to get user input is async, it doesn't block the program execution.

```js
rl.question("What's up?",answer1 => {
  console.log("Your Answer:"+answer1);
})

console.log("DONE!");

// OUTPUT:
"What's up?""DONE!"
"nothing much" <- Input
"Your Answer: nothing much" <- Output
```

## Callback Chaining

```js
a(function() {
  b(function() {
    c(function() {
      d();
    });
  });
});
```

## Callback Hell

When callback chaining becomes a problem and too complicated, it's called a Callback Hell.

## Questions

<li>Create objects using correct syntax with a variety of values.</li>
<li>Identify that an object is an unordered collection of values.</li>
<li>Key into an object to receive a single value using both Bracket and Dot
notation.</li>
<li>Use Bracket notation to set a variable as a key in an Object.</li>
<li>Implement a check to see if a key already exists within an Object.</li>
<li>Understand how object precedence fits in with dot notation for objects.</li>
<li>How to destructure an array to reference specific elements</li>
<li>How to destructure an object to reference specific elements</li>
<li>How to destructure incoming parameters into a function
<li>Identify the three keywords used to declare a variable in JavaScript</li>
<li>Explain the differences between const, let and var</li>
<li>Identify the difference between function and block-scoped variables</li>
<li>Paraphrase the concept of hoisting in regards to function and block-scoped variables</li>
<li>define recursion,</li>
<li>explain its use,</li>
<li>identify a simple base & recursive case in a problem.</li>
<li>explain the difference between single-threaded and multi-threaded execution</li>
<li>identify JavaScript as a single-threaded language</li>
<li>explain how the JavaScript runtime uses the call stack and message queue in its event loop</li>
<li>identify the two operations that characterize a queue data structure</li>
<li>Describe the difference between synchronous and asynchronous code and Give one example illustrating why we would need to deal with asynchronous code</li>
<li>write a program that accepts user input using Node's readline module</li>
<li>utilize callback chaining to guarantee relative order of execution among multiple asynchronous functions</li>
