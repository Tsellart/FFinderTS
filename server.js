var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

var apiroutes = require ("./app/routing/apiRoutes.js");
var htmlroutes = require ("./app/routing/htmlRoutes.js");

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, function() {
    console.log("Listening for PORT : " + PORT);

});
