const express = require("express");
const path = require("path");

let router = express.Router();
let viewsPath = path.join(__dirname, "views");

router.get("/", function (req, res) {
  res.sendFile(`${viewsPath}/index.html`);
});

router.get("/literature", function (req, res) {
  res.sendFile(`${viewsPath}/literature.html`);
});

router.get("/meditations", function (req, res) {
  res.sendFile(`${viewsPath}/meditations.html`);
});

router.get("/resume", function (req, res) {
  res.sendFile(`${viewsPath}/resume.html`);
});

router.get("/tutoring", function (req, res) {
  res.sendFile(`${viewsPath}/tutoring.html`);
});

// Use regex expression matching to catch all other websites and direct them here
router.get("/*splat", function (req, res) {
  res.sendFile(`${viewsPath}/testerror.html`);
});

module.exports = router;