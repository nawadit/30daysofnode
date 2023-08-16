const fs = require("node:fs/promises");

fs.writeFile("./sampleText.txt", "Hello, my name is Nawadit Sharma. ", {flag:'a'})
  .then(() => {
    console.log("data written sucessfully");
  })
  .catch((err) => console.log(err));

const data = fs
  .readFile("./sampleText.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  (async function () {
    try{
        const data = await fs.readFile('./sampleText.txt', 'utf-8')
        console.log(data)
    }
    catch(err){
        console.log('error is '+ err)
    }
  })()