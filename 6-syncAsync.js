const { readFileSync, writeFile, readFile, writeFileSync } = require("fs");
const { unlink } = require("fs");
const { rename } = require("fs");
const { copyFile } = require("fs");
const { mkdir } = require("fs");

const first = readFileSync("./pathFolder/first.txt", "utf8");
const second = readFileSync("./pathFolder/second.txt", "utf8");
console.log(first, second);

// Sync
writeFileSync(
  "./pathFolder/dataFileSync.txt",
  "Here is the result : " + first + second
);
