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

In JavaScript, there are three main ways to decalre a variable.

1) `const` - To declare a constant. A constant cannot be re-assigned, it's value is fixed. Note, that the name binding in immutable, but if a const stores a reference type value (e.g object), it is still mutable. `const` are block scoped.

2) `let` - To declare a re-assignable variable. Variables declared with let are block scoped.

3) `var` - Older syntax to declare a variable. `var` are function scoped.

**Hoisting** - The mechanism of JavaScript that will ***hoist*** the variable declarations to the top of its scope is called hoisting.

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
