var path = require("path");
var express = require("express");
var htmlrouter = express.Router();

htmlrouter.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlrouter.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlrouter.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlrouter;