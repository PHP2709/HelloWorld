/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: __Priyansh Parikh__ Student ID: __158341214__ Date: __15/09/2022__
*
*  Cyclic Web App URL: https://gifted-knickers-worm.cyclic.app
*
*  GitHub Repository URL: _____________________________________________________
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Priyansh Parikh - 158341214");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);