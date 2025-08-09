var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`); // the pathname is everything after the base.
    const { pathname } = url;

    let fileName = "";
    switch (pathname) {
      case "/":
        fileName = "./views/index.html";
        break;
      case "/literature":
        fileName = "./views/literature.html";
        break;
      case "/meditations":
        fileName = "./views/meditations.html";
        break;
      case "/resume":
        fileName = "./views/resume.html";
        break;
      case "/tutoring":
        fileName = "./views/tutoring.html";
        break;
      default:
        fileName = "/testerror.html";
        break;
    }
    fs.readFile(fileName, function (error, content) {
      if (error) {
        // if an error (not null) occurred while reading the file such as file not found
        console.log(`Sorry we got an error, error:  ${error}`);
      } else {
        // there is no error
        res.end(content); // send the content of the file (either index or info) to the client
      }
    });
  })
  .listen(8080); // this is the port number
console.log("Server running at http://localhost:8080/");
