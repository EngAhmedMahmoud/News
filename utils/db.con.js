"use strict";
require("dotenv");
const mongoose = require("mongoose");
const URL = process.env.DB_URL;
//creating connection
mongoose.connect(URL, { useNewUrlParser: true }).then(() => {
    console.log("Database Connected successfully");
}).catch((error) => {
    console.log("Database Error:" + error);
});