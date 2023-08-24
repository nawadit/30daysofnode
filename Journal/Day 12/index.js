const express = require("express");
const fs = require("node:fs");

let grocery = JSON.parse(
  fs.readFileSync("./groceryList.json", "utf-8", () =>
    console.log(`data is being read`)
  )
);

const writeFile = (grocery) => {
  fs.writeFile("./groceryList.json", JSON.stringify(grocery), (err) => {
    if (err) {
      console.log(`There's been an error`);
    } else {
      console.log(`Data written sucessfully`);
    }
  });
};

const app = express();

const portNo = 2000;

app.use(express.json());

app.listen(portNo, () => console.log(`express is running on port ${portNo}`));

app.get("/groceries", (req, res) => {
  res.send(grocery);
});
app.post("/groceries", (req, res) => {
  grocery.push(req.body);
  writeFile(grocery);
  res.send(grocery);
});
