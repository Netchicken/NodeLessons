const { createReadStream } = require("fs");

//4 types writable, readable, duplex (read and write sequentually), transform (data can be modified when writing or reading)
//streams are emiter types with ON and EMIT methods
//streams are instances of event emitters
//streams are used to read and write data in chunks not all at once - video streaming
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./pathfolder/big.txt", "utf8");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
