

# Node.js Local Modules

In Node.js, modules provide a way to encapsulate code and data within separate, reusable units. This documentation explores the concepts of local modules, their structure, usage, and related topics.

## Table of Contents

- [Introduction](#introduction)
- [Local Modules](#local-modules)
  - [CommonJS Module Structure](#commonjs-module-structure)
  - [Importing Local Modules](#importing-local-modules)
  - [Abstraction in Modules](#abstraction-in-modules)
- [Module Scope](#module-scope)
  - [Immediately Invoked Function Expression (IIFE)](#immediately-invoked-function-expression-iife)
- [Module Wrapper](#module-wrapper)
- [Module Caching](#module-caching)
- [Import-Export Patterns](#import-export-patterns)
- [ES Modules](#es-modules)
- [Importing JSON](#importing-json)
- [Watch Mode](#watch-mode)

## Introduction

A module in Node.js is a self-contained unit of code that can encapsulate functionality, variables, and data. Modules help organize code and enable reusability by breaking down complex applications into manageable components.

## Local Modules

Local modules are modules defined within your project's directory structure. Each JavaScript file is treated as a module, but they are isolated by default, meaning variables and functions defined in one module do not affect the scope of another module.

### CommonJS Module Structure

Node.js uses the CommonJS standard for structuring and sharing modules. This standard provides guidelines for exporting and importing functionality between modules.

To export functions or variables from a module, use the `module.exports` object.

Example:
```javascript
// myModule.js
module.exports = {
  myFunction: function() {
    // function implementation
  }
};
```

### Importing Local Modules

To use functionality from one module in another, you can use the `require` function. When using `require`, Node.js infers a `.js` extension at the end of the file path.

Example:
```javascript
// index.js
const myModule = require('./myModule');
myModule.myFunction();
```

### Abstraction in Modules

Modules provide a way to abstract and encapsulate code. A module object represents the data and functionality of a JavaScript module. This abstraction allows for separation of concerns and reusability.

## Module Scope

Each module in Node.js has its own scope, preventing variable and function name conflicts. The Immediately Invoked Function Expression (IIFE) is often used to achieve this isolation.

### Immediately Invoked Function Expression (IIFE)

An IIFE is a self-executing function that helps create a private scope for the module. It allows you to reuse variable and function names without causing conflicts with other modules.

Example:
```javascript
(function(){
  // module code
})();
```

## Module Wrapper

Node.js wraps each module code in a function, providing access to several variables: `exports`, `require`, `module`, `__filename`, and `__dirname`. These variables enable the module system to work seamlessly.

Example:
```javascript
(function(exports, require, module, __filename, __dirname) {
  // module code
})();
```

## Module Caching

Node.js caches modules to optimize performance. When you require a module, Node.js stores the exported objects in memory. If you export an instance of a class, the same instance is reused on subsequent `require` calls. However, exporting the class itself creates a new instance each time.

## Import-Export Patterns

Local modules can export functionality using different patterns.

Example:
```javascript
// Exporting a function
module.exports = function() {
  // function implementation
};

// Exporting an object with functions
module.exports = {
  myFunction1: function() { /* implementation */ },
  myFunction2: function() { /* implementation */ }
};
```

You can also use the shorthand syntax for exporting:
```javascript
// Shorthand for exporting functions
exports.myFunction = function() { /* implementation */ };

// Shorthand for exporting variables
exports.myVariable = 42;
```

From a module NodeJS only returns module.exports and not exports. exports are just a reference to module.exports, but when we assign new object literal to export the reference link between exports and module.exports gets broken and the module.expoorts remains an empty object {}. But if we only use exports.function(){} to assign a function to export the change will be reflected on module.exports too.

## ES Modules

Node.js supports ECMAScript (ES) modules, indicated by the `.mjs` extension. ES modules offer a different syntax for importing and exporting, promoting compatibility with modern JavaScript.

Example:
```javascript
// Using ES module syntax
import { myFunction } from './myModule.mjs';
```

## Importing JSON

Node.js can automatically parse JSON files when imported using `require`.

Example:
```javascript
const jsonData = require('./data.json');
```

## Watch Mode

To monitor changes in a module and automatically restart the application, you can use the `--watch` flag with the `node` command.

Example:
```bash
node --watch filename.js
```
