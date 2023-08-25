const fs = require("node:fs");

const redableStream = fs.createReadStream("./sampleText.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./sampleText2.txt", {flags:'a'});

redableStream.on("data", (chunk) => {
  writeableStream.write(chunk);
  console.log(chunk);
});


