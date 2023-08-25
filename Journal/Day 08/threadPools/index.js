const crypto = require("crypto");
const startingTime = Date.now();
const fs = require("node:fs");
const maxCalls = 16;
// process.env.UV_THREADPOOL_SIZE = 1;

for (let iteration = 0; iteration < maxCalls*2; iteration++) {
  crypto.pbkdf2("<password>", `salt`, 1000, 64, `sha512`, () => {
    console.log(
      `console.log() from CRYPTO() iteration ${iteration} and it took ${
         Date.now() - startingTime
      } ms`
    );
  });
}
