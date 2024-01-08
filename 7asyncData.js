const { readFile, writeFile } = require("fs");
//this is async and need to provide a callback function
//if we don't provide a callback function, it will not work
//if we provide a callback function, it will work
//(err, result) =>  this is the callback

readFile("./pathFolder/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

readFile("./pathFolder/second.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

// Sync
//  flag: "a" appends data instead of overwriting it
// writeFile(
//   "./pathFolder/dataFileASync.txt",
//   "Here is the result : " + first + " " + second + "\n",
//   { flag: "a" }
// );
