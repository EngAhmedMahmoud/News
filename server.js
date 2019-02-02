"use strict";
require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT || 5000;
const URL = process.env.SERVER_URL || "http://127.0.0.1";
const newsRouter = require("./routes/newsRoute");
//database connection
require("./utils/db.con");
//create app
const app = express();

//init app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serving static files
app.use(express.static('assets'));

//set view engine
app.set('view engine', 'pug');


//news routes
app.use("/", newsRouter);

//handel any error happen
app.use((req, res, next) => {
    let error = new Error;
    error.msg = "Not found";
    error.code = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.render("./partials/error.pug", { error: error });
});

//running the server
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server Running at ${URL}:${PORT}`);
    }
})