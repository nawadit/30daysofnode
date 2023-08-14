# Node.js Built-in Modules Documentation

## Table of Contents

1. [Path Module](#path-module)
2. [Callback Functions](#callback-functions)
3. [Events Module](#events-module)
4. [Character Sets and Encoding](#character-sets-and-encoding)
5. [Streams](#streams)
6. [Buffers](#buffers)
7. [Asynchronous JavaScript](#asynchronous-javascript)

Let's dive into each module:

---

## 1. Path Module

The `path` module provides utilities for working with file and directory paths. It is commonly used for tasks like joining paths, normalizing paths, and extracting path components.

**Example:**

```javascript
const path = require('path');

const filePath = '/user/documents/index.html';

console.log(path.basename(filePath)); // Output: index.html
console.log(path.dirname(filePath));  // Output: /user/documents
console.log(path.extname(filePath));  // Output: .html
```

## 2. Callback Functions

Callback functions are a fundamental concept in Node.js, allowing you to work with asynchronous operations. They are often used in functions like reading files, making HTTP requests, and handling events.

**Example:**

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
```

## 3. Events Module

The `events` module enables you to create and handle custom events in your applications. It provides an EventEmitter class for managing event-driven programming.

**Example:**

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', () => {
    console.log('Custom event triggered');
});

myEmitter.emit('customEvent'); // Output: Custom event triggered
```

## 4. Character Sets and Encoding

Node.js supports various character sets and encodings for working with different types of data. The `Buffer` class is often used to convert between strings and binary data.

**Example:**

```javascript
const buffer = Buffer.from('Hello, Node.js', 'utf-8');
console.log(buffer.toString('hex')); // Output: 48656c6c6f2c204e6f64652e6a73
```

## 5. Streams

Streams provide an efficient way to handle data flow, especially for large files or network operations. They allow you to read or write data in chunks, reducing memory consumption.

**Example:**

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('Read operation finished');
});
```

## 6. Buffers

Buffers are used to work with binary data directly in Node.js. They are especially useful when dealing with network protocols, file systems, and other low-level operations.

**Example:**

```javascript
const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');

const combinedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(combinedBuffer.toString()); // Output: HelloNode.js
```

## 7. Asynchronous JavaScript

Node.js is built around asynchronous programming, allowing you to perform tasks without blocking the main thread. Functions like `setTimeout` and `setInterval` are commonly used for asynchronous operations.

**Example:**

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Delayed log after 2 seconds');
}, 2000);

console.log('End');
```
