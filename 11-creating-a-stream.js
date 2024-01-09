const { createReadStream } = require("fs");

//4 types writable, readable, duplex (read and write sequentually), transform (data can be modified when writing or reading)
//streams are emiter types with ON and EMIT methods
//streams are instances of event emitters
//streams are used to read and write data in chunks not all at once - video streaming
// default 64kb
// last buffer - remainder
// highWaterMark - control size of the buffer to set your own.
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./pathfolder/dbtext.txt", "utf8");

//reading the data in chunks of 64kb
//'data' is the built in event to read the data
stream.on("data", (result) => {
  console.log(result);
});
//'error' is the built in event to read the error
stream.on("error", (err) => console.log(err));
