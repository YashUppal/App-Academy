# TDD and OOP

## NPM

NPM stands for `node package manager` and it is a tool to manage node packages.

## Initialize an npm package

If your `package` is not being published, it can simply be referred to as `project`.

`npm init` command can be used to initialize a project. It generates a `package.json` file that has the configuration for the project.

## Install a package

Look up any package from the npm registry and install it using the `npm install` command.

```node
npm install chalk;
```
## Types of Dependencies

- `dependencies` : these are the dependencies (dependent packages) that your application uses while it is in production (deployed to a server ready to be used)

- `devDependencies`: these are the dependencies that are used locally while developing the application.

## Install a devDependency

To install a `devDependency` use the command `npm install dependencyname --save-dev`.

## node_modules

The code for downloaded packages is saved in the node_modules folders. It wise to add the `node_modules` to your `.gitignore` file as folder size can get very big.

## Using a package in code

Read the documentation for that package.

## Installing Dependencies in an Existing Project

Running `npm install` in the root directory of your project, having a `package.json` and `package-lock.json` file will install the packages listed inside the package-lock.json file.

## Removing a dependency

`npm uninstall <packageName>` will remove the package from your project and also update the package json files.

## Updating a dependency

`npm update <packageName>` will update the package.

## Auditing

`npm audit` comman will find security vulnerabilities in your project and provide suggestions to fix them.

## Running and Writing Scripts

`npm run <scriptName>` will run scripts defined in the `package.json` file "scripts" node.

## Local Modules

Modules within the projects (not npm packages) are called local modules.

## Exporting modules

CommonJS module export

```js

calculator.js

const operations = ['+','-','*'];

const add = () => {
    // code
}

const subtract = () => {
    // code
}

const multiply = () => {
    // code
}

module.exports.add = add;
module.exports.operations = operations;

// or

module.exports = {
    add,
    operations
}

// makes the two items import-able
```

## Import modules

`require` is used to import modules

```js
const calculator = require('calculator');
const add = calculator.add;
const operations = calculator.add;
```

## Folders as Modules

Folders can also be imported as modules, but that folder must have an `index.js` file. Node will be prompted to look for `index.js` file in that folder, and import that.

For More -> Read CommonJS imports in the documentation.

## CommonJS Modules vs ESModules

ESModules is the newer implementation.

## module object

Each module in node has access to a `module` object that represents the current module. that `module` object has an exports property that defines exports from the current module.

## Refactoring Code

Refactoring code is the process of re-writing or changing existing code to make in more readable and easier to understand for other developers, or to improve perfomance of the code. There are a few principles of refactoring.

## Single Responsibility Principle

Single Responsibility Principle states that each module, class or function should do one thing and do that well. In other words, each piece of code should only do one thing, instead of trying to achieve too many things together.

This `Separation of Concerns` will make problems easier to isolate and debug, also changes will be easier to make.

## Don't Repeat Yourself

Repeating patterns in code should be abstracted out to avoid redundancy. This will make the code more maintainable and easier to debug.

## Object Oriented Programming

Object Oriented Programming is a paradigm, which emulates real world objects in code. Each piece of code is a self contained object which combined together perform the larger functionality.

Objects have `properties` and `functionalities`.

`properties` are `attributes` that the object has - like data it stores (variables).

`functionalities` are `methods` on the object - the actions they can perform (functions).

## Breaking Down an Example with OOP

A `Pencil` API could have:

`description`-

    - tool to write on papers

`attributes` -

    - has a color. one or more.
    - has a shape
    - has a length
    - has a grade for the graphite darkness
    - might have an eraser at attached

`methods` -

    - can write
    - can be sharpened
    - can be rotated
    - might be able to erase text

summary - Object Oriented Programming is a process of breaking down a complex applications into smalled `objects` with their own properties and methods, which can be plugged in via `APIs`

## Encapsulate

To `encapsulate` is to wrap something in a black box, hiding away all the complexities of its interal functioning and exposing only the things (endpoints) that the agent needs.

Vending Machine example!

## Class

A `class` is a blueprint that is used to create an object. A `constructor` instantiates and instance of a class, i.e, instantiates an `object`

## Summary

- Encapsulation is hiding away all the nitty-gritty complex details of something in a black box and exposing only what's need. Recall Vending Machine

- Classes are blueprints that define an object

- Object is an instance of a class

- Constructor is a method that creates an instance of a class, i.e, creates an object

## How to define a class

```js
class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
    }
}
```
## How to define instance methods and variables

```js
class Book {
    constructor(title, genre, author) {
        this.title = title; // instance variables
        this.genre = genre;
        this.author = author;
    }

    flipPage() {
        return `Page flipped of ${this.title}.`;
    }
}

// To create an instance

let coolBook = new Book("Metamorphosis","Fiction/Philosophy","Franz Kafka");

console.log(coolBook);
// Output
// Book {
//   title: 'Metamorphosis',
//   series: 'Fiction/Philosophy',
//   author: 'Franz Kafka'
// }

coolBook.flipPage(); // calling an instance method
// Output
// Page flipped of Metamorphosis.
```

## What are instance methods?

Instance methods are the functions, local to an object, that defines the functionality of that object

## How to check if object is instance of a call

Using `instance of`

## Definition of Classes

Classes are templates for creating objects. They encapsulate data with code to work on that data.


## what does the `this` keyword do?

`this` keyword maintains the context of our instances (Objects) when calling the instance methods.

## Static Methods

Static Methods are methods that are invoked on the class and not on any instance. They are prefixed with a static keyword

```js
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    static getAuthors(...books) {
        return books.map(book => book.author);
    }
}

let book1 = new Book("Metamorphosis","Kafka");
let book2 = new Book("Meditations","Aurelius");

let authors = Book.getAuthors(book1, book2);
console.log(authors); // [ 'Kafka', 'Aurelius' ]
```

## Examples of uses of static methods

`Math` is a class in JavaScript which only has static methods, called on data to perform mathematical operations.

## Static Variables

Static Variables, just like static methods, are variables (properties) local to a class and are not part of any instance.

They could be useful in caching some information, storing configurations for the class, or just storing things which dont need to be part of instances.

They are declared using `static` keyword

```js
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;

        Book.numBooks += 1;
    }

    static numBooks = 0;

    getTitle() {
        return this.title;
    }
}

let book1 = new Book("Metamorphosis","Kafka");
let book2 = new Book("Meditations","Aurelius");

let booksCreatedSoFar = Book.numBooks;

console.log(booksCreatedSoFar); // 2
```

## Inheritance

To Inherit, is to receive from your ancestor.

Inheritance in programming is the ability of child classess to inherit data and methods from their parent classes.

Example,

`Pen` and `Pencil` classes can inherit things like `bodyColor, shape, size` and methods like `writing()` from a parent class `WritingInstrument`


## Inheritance Syntax

```js
class Animal {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    static pet(animal) {
        console.log(`You attempted to pet ${animal.name}`);
    }

    speak() {
        console.log(this.sound);
    }

}

class Dog extends Animal {
    // everything inherited from Animal class
}

let fluffy = new Dog("fluffy","woof");
fluffy.speak(); // woof
Animal.pet(fluffy); // You attempted to pet fluffy
```

## Object class

When you dont explicitly provide a parent class, classes are inherited from the `Object` class.

```js
class Animal {}

// same as

class Animal extends Object {
}
```

## super keyword

`super` keyword can be used to call the constructor of the parent class inside the child class

```js
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    static pet(animal) {
        console.log(`You attempted to pet ${animal.name}`);
    }

    speak() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "woof"); // every dog will have a woof sound
    }
}

let fluffy = new Dog("fluffy"); // only have to pass a name
fluffy.speak(); // woof;
```

## Interesting Behaviour

```js
class Fruit {
  constructor(color, taste) {
    this.color = color;
    this.taste = taste;
  }

  eat() {
    // name of the constructor function
    console.log(`You ate a ${this.constructor.name}.`);
  }
}

class Apple extends Fruit {
  constructor() {
    super('red', 'sweet');
  }
}

const orange = new Fruit('orange', 'tangy');
const apple = new Apple();
apple.eat(); // You ate a Apple
```

## Polymorphism

Polymorphism is the ability to take multiple forms.

In OOP, Polymorphism is changing or 'morphing' an existing implementation for each class.

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/week-04/assets/polymorphism-example.svg">

In Simpler words, `Polymorphism` in Object Oriented Programming is extending the parent's methods in the child class to do something more or different than the parent.

<img src="pointers_1.PNG">

## How to implement polymorphism

One way polymorphism could be implemented is `method overriding`, where a child class overrides the parent's method.

You do that by creating a new method on a class (can be `instance method` or `static method`) with the same name.

```js
class Business {
    toString() {
        console.log("Give us your money");
    }
}

class ClothingStore extends Business {
    toString() {
        console.log("Buy clothes you don't need");
    }
}

let store = new ClothingStore();
store.toString(); // Buy clothes you don't need
```

## Using `super` to call a parent's method

`super` can be used inside the child's instance method to call the parent's method with the same name.

## `this` keyword

`this` keyword refers to the object that is currently calling a method.

## Method Style invocation

Method style invocation, or dot-notation, is when a method is called on an object like `object.method(args)`. This ensures that the `this` inside the method is set to the object them method is called upon

## Context

**Context** refers to the value of `this` within a function and `this` refers to where the function is invoked

## `strict mode`

`strict mode` is used to protect the global object by accidental mutations by running functions in unintended contexts

## Scope vs Context

Scope refers to the visibility and availability of variables, whereas Context refers to the value of `this` in the code.

## Bind

When `bind` is called, it returns a function that has `this` bound to a provided value, no matter where it is called.

```js
let boundFunc = func.bind(context);
```

Magic of `bind` is that you can choose the context for your functions.

```js
class Cat {
    constructor(name) {
        this.name = name
    }

    purr() {
        console.log("purr");
    }

    purrMore() {
        this.purr();
    }
}

let cat = new Cat("Meowser");

const purr = cat.purrMore;

purr(); // purr is not defined

// binding

let boundPurr = purr.bind(cat);

boundPurr(); // "meow"
```

Another Example

```js

class Cat {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}


let cat = new Cat("meowser"):
let dog = new Dog("fido");

let sayName = cat.sayName;

sayNameCat = sayName.bind(cat);
sayNameDog = sayName.bind(dog);

sayNameCat(); // My name is meowser
sayNameDog(); // My name is fido

```
to summarise, `bind` function returns a functions with a set `this` keyword.

`call`, `apply` and `bind`, all three serve the same purpose, i.e to call a function with an explicit context.

<a href="https://www.youtube.com/watch?v=YOlr79NaAtQ">FireShip Video</a>

## `apply` and `call`

`apply` and `call` are two more methods that can be used to bind a context to a function. They are different from `bind` as `bind` returns a new function with its `this` set that can be called multiple times, whereas `apply` and `call` invoke the function directly with the passed on context.

`apply` takes an array of arguments and `call` takes comma separated values

```js
let result = saySomething.apply(context,[...args]);
let result = saySomething.call(context, ...args);
```

```js
class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`${this.name} says meow`);
    }
}

let dog = new Dog("fido");
let cat = new Cat("meowser");

cat.sayName.call(dog); // fido says meow
cat.sayName.apply(dog);
```

`call` and `apply` are same except the way they take arguments. apply can take at most two arguments, second one being the array of arguments, whereas call takes comman separated arguments.


## Exercise

```js
class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    sayName() {
        console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        console.log(`${this.name} is a ${this.occupation}`);
    }
}

let jwick = new Employee("John Wick","Dog Lover");

setTimeout(jwick.sayName,2000);
// undefined says hello


setTimeout(jwick.sayOccupation,3000);
// undefined is a undefined

// the instance methods are being passed to setTimeout as callbacks,
// so at runtime, the context is changed and thus this is undefined

// fix

setTimeout(jwick.sayName.bind(jwick),2000);
setTimeout(jwick.sayOccupation.bind(jwick),3000);

```

## Arrow Functions Review

```js
const coolArrowFunction = () => {
    // expressions

    // return statement
}

const implicitReturnArrowFunc = someParameter => return <something>
```

Arrow Functions are anonymous. You cant store them in a variable/constant though.

## Context in Arrow Functions

In Arrow Functions, the value of `this` is based on what code contains it, not what calls it. Thus making them much more usable as callbacks

Meaning, the `this` is lexically bound.

```js
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(this.name);
    }

    delayedBark() {
        setTimeout(this.bark,1000);
    }
}

let fido = new Dog("fido");
fido.bark(); // "fido"
fido.delayedBark(); // undefined

// fix

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(this.name);
    }

    delayedBark() {
        setTimeout(this.bark.bind(this),1000);
    }
}

fido.delayedBark(); // fido after 1 second

```

```js
// Better Solution

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark = () => {
        console.log(this.name);
    }

    delayedBark = () => {
        setTimeout(this.bark,1000);
    }
}

let fido = new Dog('fido');
fido.delayedBark(); // fido after 1 second

```

Arrow functions do not have a `this` of their own, they infer the `this` from surrouding scope. They have a unique ability to retain the context from where they are defined.

## Context in Regular Functions vs Arrow Functions

In Regular Functions, context is bound to the object the functions is called on. the `this` will always be the object that the function/method is called on.

In Arrow Functions, there is no `this` of their own. They derive the `this` from their surrounding scope.

```js
var variable = “Global Level Variable”;

let myObject = {
 variable: “Object Level Variable”,
arrowFunction:() => {
 console.log(this.variable);
 },

regularFunction(){
 console.log(this.variable);
 }

};

myObject.arrowFunction(); // "Global Level Variable"
myObject.regularFunction(); // "Object Level Variable"
```

## What's Prototype

**Everything in JavaScript is an object**

In JavaScript, every object has a hidden property called `[[Prototype]]` which either refers to an object or null.

When we read a property on any object, if it's not found on that object, then JavaScript looks it up on its prototype, and it keeps going up the `Prototype Chain`. This is called `Prototypal Inheritance`

```javascript
  null
    ⬆
[Object Prototype]
    ⬆
[Animal]
    ⬆
[Rabbit]
```

`__proto__` is the getter/setter for `[[Prototype]]`

```js
const animal = {

    eat: function() {
        console.log(`${this.name} is eating`);
    },

    sleep: function() {
        console.log(`${this.name} is sleeping`);
    }
}

const rabbit = {
    name: "Bugs",
    __proto__:animal
}

rabbit.eat(); // "Bugs is eating"

```

## 	What is the difference between proto and prototype

`__proto__` is the historical getter/setter for `[[Prototype]]`

## 	How do you create an object with prototype

`Object.create()` method can be used to create an object with explicitly setting a prototype.

```js
const user = {
    name: "John",
    getInfo: function() {
        console.log(`My name is ${this.name}`);
    }
}

const admin = Object.create(user);
admin.name = "Nate";

console.log(admin.name); // "Nate"
admin.getInfo(); // My name is Nate

```

## How do you get the prototype of an object

Using `.__proto__` getter/setter or Object.getPrototypeOf() Method.

```js
let arr = [1,2,3];

console.log(arr.__proto__); // Object(0) []
console.log(Object.getPrototypeOf(arr)); // Object(0) []
```

## How do you set prototype of one object to another

Using `Object.setPrototypeOf()` method.

```js
Object.setPrototypeOf({},null);
```

## Errors in JavaScript

## SyntaxError

Syntax error occurs whenever there is an error in the syntax of the code.

```js
funtion coolFunc() { // SyntaxError
    // doesnt matter
}
```

## ReferenceError

ReferenceError occurs whenever something outside of its scope is referenced or accessed.

```js
function coolFunc() {
    let dog = "fido";
}

console.log(dog); // ReferenceError
```

## TypeError

TypeError occurs when an operation is performed on the wrong type.

```js
let dog = "fido";
dog(); // TypeError
```

## Creating your own errors

```js
const error1 = new Error("This is an error");
const errro2 = Error("This is also an error");

console.log(error1);
console.log(error2);

// output
Error: This is an error
    at Object.<anonymous> (/home/runner/Practice/index.js:1:16)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
Error: This is also an error
    at Object.<anonymous> (/home/runner/Practice/index.js:2:16)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
```
## Throwing your own errors

You can 'throw' the custom created errors using the throw keyword

```js
const customError = Error("This is a cool error");
throw customError;

//output (in red)
Error: This is a cool error
    at Object.<anonymous> (/home/runner/Practice/index.js:1:21)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
```
## try..catch

We can catch our errors and allow the program to continue executing

```js

function safeDivide(a,b) {
    if(b === 0) {
        throw Error("Cannot divide by 0");
    } else {
        return a/b;
    }
}

try {
    safeDivide(5,0);
} catch(err) {
    console.log(err);
}

console.log("this will run!");

//output
Error: Cannot divide by 0
    at safeDivide (/home/runner/Practice/index.js:4:15)
    at Object.<anonymous> (/home/runner/Practice/index.js:11:5)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
this will run!
```

We can check for the type of errors using the `instanceof` method.

```js
if(err instanceof TypeError) {
   console.log("TypeError",err);
}
```
`SyntaxErrors` cannot be caught as they happen during compile time and not runtime.

## finally

`finally` block completes the `try..catch` block. Finally block is used to house the code that will always run, no matter error or not.

```js
const safeDivide = (a,b) => {
    if(b === 0) {
        throw Error("divisor cant be zero");
    } else {
        return a/b;
    }
}

try {
    safeDivide(1,0);
} catch(err) {
    console.log(`${err}`);
} finally {
    console.log("finally block always runs");
}
```

## Usage Suggestions

`try..catch` block makes your code slower and also cluttered. Write defensive code that checks for bad values and implement good coding practice and bulletproof your code instead.

## Questions:

- How to define a class using ES6 syntax with a constructor method
- How to define instance methods and variables
- How to create an instance using the new keyword
- What instance methods are
- How to call instance methods on an instance
- How to check if an object is an instance of a class using the instanceof operator.
- How to debug common bugs when using classes in JavaScript
- `this` keyword?
- What the context of an arrow function is
- How to define a class method using an arrow function
- When to use arrow functions to define a class method
