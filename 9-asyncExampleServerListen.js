const http = require("http");

//when we go to the browser and add in localhost:5000, we will see the console.log("request event") in the terminal
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});
//listen is asynchronous, so it will not block the code from running its an event loop
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
