var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var apirouter = require ("./app/routing/apiRoutes");
var htmlrouter = require ("./app/routing/htmlRoutes");

app.use(apirouter);
app.use(htmlrouter);

app/ListeningStateChangedEvent(PORT, function() {
    console.log("Listening for PORT : " + PORT);

});
