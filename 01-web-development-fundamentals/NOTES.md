# **Web Development Fundamentals**

# Getting Started at App Academy

## Learning at App Academy

### Active Learning

Maximise Active Learning. Pause to reflect and recall. Take notes. Absorb extra knowledge from other resources. Write and break code. Teach others. Make Projects!

### Managing Difficulty

Maintain Desirable Difficulty. Stay in the Proximal zone of development, where the difficulty is just beyond your current ability.

### Practical Learning Tips ⭐

- Spaced repetition, revisions and practice.
- Smartly incorporate passive learning
- Learn everyday

### Documenting my expectations (prepwork)

- Create 2 simple practice web projects
- Have some JavaScript practice
___

## Introduction to Problem Solving 1

### Asking questions

Learn to ask good questions. Do your own research first, Google and then ask around.

### Polya's Framework

To solve ANY problem, apply Polya's framework

**1. Understand the problem.** - What's the problem asking you to do? Can you explain it in your own words? Do you understand the requirement?

**2. Make a plan.** - Break the problem into smaller problems and make a plan.

**3. Carry out the plan.**

**4. Look back and improve.**
___

# JavaScript Fundamentals

## Data Types

### Intro to JavaScript

JavaScript is used to create dynamic and interactive web pages, and allow asynchornous operations on the web applications.

### Numbers

Numbers are represented by the 'number' data type.

> Order of mathematical operations: parantheses, division-multiplication-modulo, addition-subtraction

### Booleans

Order of boolean operations -> NOT, AND, OR

DeMorgan's Law -> !(A || B) == !A && !B , !(A && B) == !A || !B

### Variables

Variables are labels to memory locations, that can store some data. They are defined using `let` keyword.

```
let someVariable = 'some value';

let numberVariable = 4;

numberVariable++; // 5

let declaredVariable; // Variable declaration
let initializedVariable = 'Variable Initialized with some value';
```

### Strings

Strings are collection of characters, enclosed within quotes.

```
"This is a string";
"12345";
"true";
"";
```

Strings can be indexed using `[]`.

```
"bootcamp"[0]; // "b"
"bootcamp"[50]; // undefined
```

Length of a string can be calculated using `.length` method.

```
"appAcademy".length; //11
```

Strings can be concatenated together using `+`.

```
console.log("app" + " " + "Academy"); // "app Academy"
```

Index of a character in a string can be accessed using indexOf method.

```
"bootcamp".indexOf('o'); // 1
"bootcamp".indexOf('amp') // 5
"bootcamp".indexOf('z'); // -1
```

## Intro to Functions

### Functions

Functions are procedures that can be re-used. They perform some operation and return a value (undefined by default);

```
function someFunc(parameter1, parameter2) {
    return parameter1 + " " + parameter2;
}

console.log(someFunc('argument1','argument2'));
```

## Control Flow

### Conditionals

`if`,`if..else`,`if..else if` are the conditionals we can use to modify the control flow of the program.

**Mutual Exclusive Conditions** - Conditions when its either going to be true or false exclusively.

```
let num = 3;

function checkNumberThree() {
    if(num === 3) {
        return true;
    }
    return false;
}

```
### Loops

`while` and `for` loops are used to loop over some code conditionally.

### Arrays

Array is a collection of data, enclosed within brackets.
___
# Setting up your computer 1

## Getting to know your computer

### Command line

Commands like `mkdir,cp,mv,touch,rm,ls,pwd` can be used to perform navigation/operation tasks on the command line.

### Wildcards

'*' and '?' are used as wildcards.

```
ls *.txt // lists all files with extension .txt

ls ????.txt // lists files with name of length 4 characters, ending in txt

ls my????.txt // my-notes.txt
```

## Intro to Source Control

Source Control is the process of managing the code of your project.

Git is one of the softwares for source control.
___

# HTML and CSS Fundamentals

## Problem Solving

Break down problems into smaller chunks and work on them piece by piece.

Use Polya's framework to navigate through challenges. When a problem requires skills beyond your current training, that's a good opportunity to learn a concept/framework/library. Refer to documentation and make sure you understand the code.

To debug problems, isolate the code and test it multiple times. Also, experiment with the code.

Once the problem is solved, look back and improve the solution. Make performance improvements, clean up the code, add fallbacks and error handling, try to break the code again to the best of your abilities to reveal gaps.

## HTML Basics

HTML -> Hypertext Markup language, consists of tags, and attributes.

Attributes are used to specify a property on the HTML tag.

```
<img src="path/to/image"> <- HTML element
```

HTML elements refer to the tags, attributes and the content between the tags.


## CSS basics

### Descendant Selector

```
.parent .child {
    /* some styling */
}
This will target an element with class .child that is a descendant of an element with class .parent

 Note - .parent.child is different than .parent .child. The space makes it a descendant selector, whereas the no-space makes CSS target an element with class .parent AND .child
```

### Direct Child Selector

```
.parent > .direct-child {
    /* some styling */
}
This will target and element with class .direct-child that is the direct child of the element with class .parent
```

### Sibling/Adjacent selector

```
h1 + h2 {
    /* some styling */
}

This will target the h2 tag which is a directly adjacent to an h1 tag, like below

<h1>Reference</h1>
<h2>Targeted</h2>
<h2>Not Targeted</h2>
```
## Intermediate CSS

Inline Elements -> `a`,`span`,`img`. These elements don't respect the `height` and `width` properties. They lay on the same line, one after the other, the `margin` and `padding` values still apply, but they don't push other inline elements.

Block Elements -> `div`,`p`. These elements respect the `height` and `width` properties. They lay on the page on a new line. The `margin` and `padding` values apply and they push the other elements.

Inline-Block Elements -> Best of `inline` and `block` elements combined.

Box Sizing = `border-box` includes the `border` and `padding` within the box height and width.

**Top border, bottom border, top padding, bottom padding are included in the box-height.**

**Left border, right border, left padding, right padding are included in the box-width.**
