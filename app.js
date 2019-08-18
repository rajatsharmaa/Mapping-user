const express = require('express');
const config = require('./shared/cofig');

const app = express();
const db = require('./db');

//load routing level middleware
var api = require("./controllers/api.route")();



app.use("/api", api);

app.get('./', function(req, res, next){
    console.log("I am at home page");
    res.send("Welcome to app.");
});

app.use(function (err, req, res, next) {
    console.log('i am error handling middleware', err);
    res.json({
        message: err.msg || err,
        status: err.status || 400,
    });
});


app.listen(config.port, function(err, done){
    if(err){
        console.log("Error listening to server.");
    }else{
        console.log("Server listening at port: ", config.port);
    }
})