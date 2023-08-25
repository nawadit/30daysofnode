const fs = require("node:fs");

setTimeout(() => {
  console.log(`console.log() form setTimeout 1`);
  process.nextTick(() => {
    console.log(`console.log() form nextTick  insise setTimeout 1`);
  });
}, 0);

process.nextTick(() => {
  console.log(`console.log() form nextTick 1`);
});

Promise.resolve().then(() => {
  console.log(`console.log() form resolve 1`);
  readableStream.close();

  readableStream.on("close", () => {
    console.log(`console.log() form close event stack inside resolve 1`);
  });
});

fs.readFile("./", () => {
  console.log(`console.log() from readFile 1`);
  Promise.resolve().then(() => {
    console.log(`console.log() form resolve inside readFile 1`);
  });
});

setImmediate(() => {
  console.log(`console.log() form setImmediate() 1 `);
});

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log(`console.log() form close event stack 1`);
});

/*
expected output

console.log() form nextTick 1
console.log() form resolve 1



console.log() form setTimeout 1
console.log() form nextTick  insise setTimeout 1



console.log() form setImmediate() 1 
console.log() form close event stack 1
console.log() form close event stack inside resolve 1

console.log() from readFile 1
console.log() form resolve inside readFile 1




*/ 