const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

// Module routes
router.get('/', async (req, res) => {
    try {
        const modules = await Module.find();
        res.send(modules);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const module = new Module(req.body);
        await module.save();
        res.status(201).send(module);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
