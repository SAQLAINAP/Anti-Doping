const express = require('express');
const router = express.Router();
const ForumPost = require('../models/ForumPost');

// Forum routes
router.get('/', async (req, res) => {
    try {
        const posts = await ForumPost.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const post = new ForumPost(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
