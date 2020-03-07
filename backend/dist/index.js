"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("Hellooo world!");
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
