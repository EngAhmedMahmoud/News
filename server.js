"use strict";
require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 5000;
const URL = process.env.SERVER_URL || "http://127.0.0.1";

//create app
const app = express();

//init app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serving static files
app.use(express.static('assets'));

//handel any error happen
app.use((req, res, next) => {
    let error = new Error;
    error.msg = "Not found";
    error.code = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.code || 500).json({
        code: error.code,
        msg: error.msg
    })
});

//running the server
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server Running at ${URL}:${PORT}`);
    }
})