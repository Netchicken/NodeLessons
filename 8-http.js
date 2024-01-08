const { readFileSync, readFile } = require("fs");
const http = require("http");
const first = readFileSync("./pathFolder/first.txt", "utf8");
const second = readFileSync("./pathFolder/second.txt", "utf8");

const secondAsync = () => {
  readFile("./pathFolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("error second = " + err);
      return;
    }
    return result;
  });
};

//const second = ReadSecondFileAsync;
const server = http.createServer((req, res) => {
  // console.log(req); //request is the data coming from the client REFRESH BROSWER TO SEE THIS
  console.log(req.url);
  //res is response
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.write("<h1>Hello World</h1>");
  } else if (req.url === "/about") {
    //http://localhost:3000/about
    res.write("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    //http://localhost:3000/contact
    res.write("<h1>Contact Page</h1>");
  } else if (req.url === "/user") {
    res.write("<h1>User Page</h1>");
  } else if (req.url === "/first") {
    res.write(first);
  } else if (req.url === "/second") {
    res.write(second);
  } else {
    res.write("<h1>404 Page</h1>");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server is running... on http://localhost:3000/");
});
