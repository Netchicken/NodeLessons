const { Console } = require("console");
const { readOnly, readFile } = require("fs");
console.log("started a first task");
//CHECK FILE PATH!!!
//becuase this is async it runs in the background and the next task is run
readFile("./pathFolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); //once there is a result it will log it and carry on.
  console.log("completed first task");
});
console.log("starting next task");
