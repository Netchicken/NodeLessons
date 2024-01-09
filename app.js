const { readFile, writeFile } = require("fs").promises;

//we can even remove all this and just call promises in the require above
// const util = require("util"); //built in node module that has a promisify method
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./pathFolder/first.txt", "utf8");
    const second = await readFile("./pathFolder/second.txt", "utf8");
    await writeFile(
      "./pathFolder/result-combineTwoFiles.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

//this is a promise based function that resolved the blocking code
//becuase this is async it runs in the background and the next task is run
//"./pathFolder/first.txt"
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result); //once there is a result it will log it and carry on.
//       }
//     });
//   });
// };

// getText("./pathFolder/first.txt")
//   .then((result) => console.log(result)) //we are retuning the promise outcome
//   .catch((err) => console.log(err));

//ended at 3:00 in the video
