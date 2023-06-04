const express = require("express");
const mongoose = require("mongoose")

const posts = new mongoose.Schema({
    post: {
        type: String,
        require: true,
    }
})

const Post = new mongoose.model("Post", posts);

module.exports = Post;