
# Day Two: JavaScript Crash Course Review

## Introduction to JavaScript

JavaScript is a versatile, high-level programming language commonly used for web development. It allows you to add interactivity and dynamic behavior to websites.

## Variables

Variables are containers that store data values. They can be declared using the `var`, `let`, or `const` keywords.

```javascript
var age = 25;
let name = "John";
const pi = 3.14159;
```

## Data Types

JavaScript has several primitive data types, including numbers, strings, booleans, null, undefined, and symbols, as well as complex data types like objects and arrays.

```javascript
let num = 42;
let message = "Hello, World!";
let isTrue = true;
let emptyValue = null;
let notDefined;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];
```

## Arrays

Arrays are ordered lists of values, indexed by integers. They can hold multiple data types and are created using square brackets.

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: "red"
```

## Operators

Operators perform operations on variables and values. JavaScript supports arithmetic, assignment, comparison, and logical operators.

```javascript
let x = 10;
let y = 5;
let sum = x + y;
let isGreater = x > y;
let isTrue = x > 0 && y < 10;
```

## Type Conversions

JavaScript automatically converts data types when needed, such as converting a number to a string or vice versa.

```javascript
let num = 42;
let str = String(num); // Convert number to string
let num2 = Number(str); // Convert string to number
```

## Equality in JavaScript

JavaScript has strict and loose equality operators (`===` and `==`) for comparing values.

```javascript
let a = 5;
let b = "5";
console.log(a === b); // Output: false
console.log(a == b);  // Output: true
```

## Conditional Statements

Conditional statements allow your code to make decisions based on conditions. The `if`, `else if`, and `else` statements are used for branching.

```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

## Looping Code

Loops enable you to execute a block of code repeatedly. Common loops include `for`, `while`, and `do...while`.

```javascript
// Using a for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Functions in JavaScript

Functions are reusable blocks of code that can be called with arguments and can return values. They are defined using the `function` keyword.

```javascript
// Function definition
function greet(name) {
    return "Hello, " + name + "!";
}

// Function call
let message = greet("Alice");
console.log(message); // Output: "Hello, Alice!"
```

## Scopes of Variables in JavaScript

Variables in JavaScript have different scopes, which determine where the variable is accessible. There are global scope and local scope (function scope).

```javascript
let globalVar = "I am global";

function myFunction() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
}

console.log(localVar); // Error: localVar is not defined
```
