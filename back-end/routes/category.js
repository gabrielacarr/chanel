const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/comment");

router.get("/categories", (req, res) => {
    Post.find()
    .then((categories) => {
        res.json({ categories });
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;