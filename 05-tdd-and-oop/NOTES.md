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
