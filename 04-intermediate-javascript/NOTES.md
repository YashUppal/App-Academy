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
