const http = require("http");

//underlying this server setup is the event emmitter class.

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event with the on method
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome"); //its emitting a response event
});

server.listen(5000);
