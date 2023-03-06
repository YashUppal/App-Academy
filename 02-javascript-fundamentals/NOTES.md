# JavaScript Style Guide & Good Coding Practices

## Indentation
Indent your code with each block / nest.
## Whitespace
Include whitespace in your code to air it out. Use spaces after every comma in array, and after every semicolon in loop

```javascript
[1, 2, 3, 4];
for(let i = 0; i < 10; i++) {}
```
## Line Breaks
Use empty lines to separate out each block of logic.
## Labelling
Label out complex expressions or values with are tedious to type each time
```javascript
let isDivByBoth = (num % 3 === 0 && num % 5 === 0);
```
## Semicolon
Don't forget to end your expressions with a semicolon;



# Function Expressions

## First Class Objects

In JavaScript, functions are first class object. They can be stored inside variables just like other data values.

First class citizenship in programming means "being able to do everything that every one else can do".

In JavaScript, functions can be stored inside variables, passed as arguments to other functions (`document.addEventListener(), setTimeOut() etc`), and even be returned from other functions.


## Function Declaration Syntax vs Function Expression Syntax

```javascript
// Function Declaration Syntax
function someFuncName(arg1,arg2) {}

// Function Expression Syntax
let myFunction = function(arg1,arg2) {}
```

The expression `function(arg1,arg2){}` is anonymous before it is assigned to a variable, hence it could be called an anonymous function.

# Decomposition and Abstraction

## Decomposition
Decomposition is the process of breaking down a complex problem (function) into smaller chunks.

## Abstraction
Abstraction is the process of hiding implementation details. All we need to know is that a function does something, without exposing how it does it.

## Modularity
Modularity is the philosophy of building code (functions) that are modular, and deal with just one problem, and that are not too tightly coupled or dependant. In other words, plug and play.

# Data Types

## Typeof

To see what type of value a data is, use the typeof operator

```javascript
typeof("a cool string"); // "string"

if(typeof(123) === "number"){
    console.log("Its a cool number!"); // gets printed out
}
```

## isArray

To see if a value is an array, use `Array.isArray` method

```javascript
console.log(Array.isArray([1,2,3])); // true
```

# Null and Undefined

## Null

Null data type has only one value, i.e `null`. It could mean absence of a value, an unknown value. You can check if something is null by `someValue === null`.

## undefined

Undefined data type has a value `undefined` which means a value which is not yet defined. Variables by default have this value and functions by default return this value, if not set explicitly.

```javascript
let someVar;
console.log(someVar); // undefined

function defaultReturn {

}

console.log(defaultReturn()) // undefined
```
Undefined can be checked by strict equality.
```javascript
let someVar;
console.log(someVar === undefined) // true
```

# Mutability

## What is Mutability?

The ability to mutate something is called mutability. In other words, if something can be changed, it is mutable. If something cannot be changed, it is immutable.

## Mutable and Immutable Data Types

In JavaScript, Arrays and Objects are Mutable, whereas Number, Booleans, Strings are immutable.

Remember, the simpler data types are immutable, whereas the composite data types are mutable.

# Array Splice Method

`Array.prototype.splice` method is a versatile one.

```javascript
let array = [1,2,3,4,5];

array.splice(1,2,"replacement","anotherReplacement");

console.log(array) // [1,"replacement","anotherReplacement",4,5]
```

`array.splice(targetIndex, countToRemove, elementsToAdd)` translates to 'In the `array`, at index `targetIndex`, remove `countToRemove` number of elements and add `elementsToAdd`.

splice can be used to add or remove elements from the array. **It mutates the original array**

# Array split and join methods

To convert a string to an array, we use the split method. On a passed delimiter, the string is 'split' and we get a new array back.

To convert an array into a string, we use the join method. On a given 'glue', we get a joined back string.

```javascript
let arr = ["collection","of","words"];
let joined = arr.join(" ");

console.log(joined); // collection of words

let str = "a cool sentence";
let splitted = str.split(" ");
console.log(splitted); // ["a","cool","sentence"];
```
# Advanced Array Methods

## forEach

forEach method is used to iterate over each element of an array. It take a function as an argument, to perform some operation on the element. The functions accepts element and index as arguments. It also accepts a reference to the current array being iterated as an argument

```javascript
let arr = [1,2,3,4,5];

function output(ele, index, currentArr) {
    console.log(ele, index, currentArr);
}

arr.forEach(output)

// Output:
1 0 [1,2,3,4,5]
2 1 [1,2,3,4,5]
3 2 [1,2,3,4,5]
4 3 [1,2,3,4,5]
5 4 [1,2,3,4,5]
```

## map

map method iterates over an array, performs some operation on elements and returns a new array with the operation mapped on the elements. `map` takes a function as argument, and the function accepts element and index as arguments.

```javascript
let arr = [1,2,3,4,5];

function multiplyByIndex(ele, index) {
    return ele * index;
}

let newArr = arr.map(multiplyByIndex);

console.log(newArr); // [ 0, 2, 6, 12, 20 ]
```

## filter

`filter` iterates over an array and returns a new array filtered out based on the the passed in function. The function takes in the element, index and array reference as arguments.

```javascript
let arr = [-10,2,5,53,2,1,4,12];

function largerThanIndex(ele, idx, array) {
  return ele > idx;
}

let filtered = arr.filter(largerThanIndex);

console.log(filtered); // [ 2, 5, 53, 12 ]
```
