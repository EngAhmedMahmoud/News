"use strict";
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const NewsSchema = new schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    details: {
        type: String,
        required: [true, "News details required"]
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String,
        required: [true, "Author name required"],
    }
});
module.exports = mongoose.model("News", NewsSchema, "news");