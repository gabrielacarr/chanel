const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const Post = mongoose.model("Post");

const Post = require("../models/post")

router.get("/posts", (req, res) => {
    Post.find() //.limit(12)
        // .populate("category", "_id name")
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            console.log(err);
        });
});


router.post("/new-post", (req, res) => {
    console.log(req.body)
    const { title, description, imgUrl, category } = req.body;

    if (!title || !description || !category) {
        res.json({ err: "All fields are required" });
    }
    const post = new Post({
        title,
        description,
        imgUrl,
        category
    });

    post.save().then(() => {
        res.json({ msg: "Published" });
    }).catch((err) => {
        console.log(err);
    });
});



module.exports = router;