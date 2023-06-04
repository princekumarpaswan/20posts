const express = require("express")
const router = new express.Router()
const Posts = require("../models/posts");

// router("/", async (req, res) => {
//     try {
//         res.status(201).send("use /post to get 20 post")
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
router.get("/", async (req, res) => {
    res.send("Hello from prince");
})

router.post("/sendPosts", async (req, res) => {
    try {
        const addingPosts = new Posts(req.body)
        const insertPost = await addingPosts.save();
        res.status(201).send(insertPost)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/post", async (req, res) => {
    try {
        const getPost = await Posts.find({})
        res.status(200).send(getPost)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router