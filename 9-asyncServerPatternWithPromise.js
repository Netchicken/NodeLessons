const { readFile } = require("fs");

//this is a promise based function that resolved the blocking code
//becuase this is async it runs in the background and the next task is run
//"./pathFolder/first.txt"
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(result); //once there is a result it will log it and carry on.
      }
    });
  });
};

getText("./pathFolder/first.txt")
  .then((result) => console.log(result)) //we are retuning the promise outcome
  .catch((err) => console.log(err));
