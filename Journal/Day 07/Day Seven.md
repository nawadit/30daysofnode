
## Promising fs Module using Async Functions with Try-Catch

In Node.js, the `fs` module provides file system-related functionalities. To work with asynchronous operations using Promises and `async/await` with error handling, you can utilize the following approach:

```javascript
const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
}

// Usage
(async () => {
    try {
        const content = await readFileAsync('example.txt');
        console.log(content);
    } catch (error) {
        console.error(error.message);
    }
})();
```

## Streams and Pipes

Streams are a core module in Node.js that extends the `EventEmitter` class from the `events` module. They enable efficient handling of data flows, especially for large datasets. Streams can be categorized into four types: Readable, Writable, Duplex, and Transform.

- **Readable Stream**: Represents a source of data that can be read.

- **Writable Stream**: Represents a destination where data can be written.

- **Duplex Stream**: Represents both a readable and writable stream.

- **Transform Stream**: A type of duplex stream that can modify or transform the data as it passes through.

## Pipes and Pipe Chaining

Pipes are a powerful mechanism in Node.js to simplify data transfer between streams. They allow you to connect the output of one stream to the input of another. This is particularly useful when you want to avoid loading large amounts of data into memory at once.

Here's an example of piping data from a readable stream to a writable stream:

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
```

Pipes can also be chained together to create more complex data processing pipelines:

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const transformStream = new TransformStream(); // Custom transform stream
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(transformStream).pipe(writableStream);
```

## HTTP Module - Creating a Node.js Server

The `http` module in Node.js allows you to create and handle HTTP servers. Here's a basic example of creating a server that responds with different types of content:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Welcome to Node.js Server</h1>');
    } else if (req.url === '/json') {
        const data = { message: 'Hello, JSON response!' };
        res.end(JSON.stringify(data));
    } else if (req.url === '/plain') {
        res.end('Plain text response');
    } else {
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
```

In this example, the server listens on port 3000 and responds with different types of content based on the requested URL.

