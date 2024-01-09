const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    //adding in blocking code running synchronously!!
    //this will also block everyone else trying to get to the homepage
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }

    res.end("Here is our short history");
  }
  if (req.url === "/contact") {
    res.end("Contact with us");
  }
  //res.end(`Error page`);
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
