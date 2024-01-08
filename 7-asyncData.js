const { readFile, writeFile } = require("fs");
//this is async and need to provide a callback function
//if we don't provide a callback function, it will not work
//if we provide a callback function, it will work
//(err, result) =>  this is the callback

//ASYNc NOT WORKING AS THE DATA ISN'T BEING LOADED IN TIME. NEED AWAIT

// var first = "no data";
// var second = "no data";
console.log("start");
readFile("./pathFolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error  = " + err);
    return;
  }
  const first = result;
  console.log("data first = " + first); //the only way to access the result is in the callback
  ReadSecondFile(first);
});

const ReadSecondFile = (first) => {
  readFile("./pathFolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("error second = " + err);
      return;
    }
    const second = result;
    WriteToNewFile(first, second);
    return result;
  });
};
//  flag: "a" appends data instead of overwriting it
const WriteToNewFile = (first, second) => {
  writeFile(
    "./pathFolder/dataFileASync.txt",
    "Here is the result : " + first + " " + second + "\n",
    { flag: "a" }, //add in a callback function
    (err, result) => {
      if (first === "" || second === "") {
        console.log("data missing first: " + first + " second:  " + second);
        return;
      }
      if (err) {
        console.log("data error: " + err);
        return;
      }
      console.log("Done with this task"); //this is undefined it doesn't matter
    }
  );
};
