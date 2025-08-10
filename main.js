let router = require("./router.js");
let express = require("express");

let app = express();

app.use("/", router);
app.listen(8080);

console.log("Server running at http://localhost:8080/");
