const os = require("os");
//info about current user
const user = os.userInfo();

const path = require("path");

console.log(user);
//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  homedir: os.homedir(),
};
console.log(currentOS);

console.log("path separator in the path:   " + path.sep);

filepathToData = path.join(
  path.dirname(__dirname),
  "pathFolder",
  "files",
  "data.txt"
);
console.log(filepathToData);

const base = path.basename(filepathToData); //gets the last in the path.
console.log(base);
