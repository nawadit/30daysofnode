const fs = require("node:fs");

fs.readFile("./samplefile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile(
  "./samplefile.txt",
  " Hi, my name is Nawadit Sharma.",
  { flag: "a" },
//   appended due to this object and flag setting to a
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data written sucessfully");
    }
  }
);
