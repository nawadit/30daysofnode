const fs = require("node:fs");

fs.writeFileSync("./samplefile.txt", "Hello, World!");
console.log(`Wrote 'Hello, World!' to the file. `);

const fileContent = fs.readFileSync("./samplefile.txt", "utf-8");

console.log(fileContent);
