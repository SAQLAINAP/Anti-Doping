const express = require('express');
const router = express.Router();
const NewsItem = require('../models/NewsItem');

// News routes
router.get('/', async (req, res) => {
    try {
        const news = await NewsItem.find();
        res.send(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const newsItem = new NewsItem(req.body);
        await newsItem.save();
        res.status(201).send(newsItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
