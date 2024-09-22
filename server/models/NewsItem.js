const mongoose = require('mongoose');

const NewsItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const NewsItem = mongoose.model('NewsItem', NewsItemSchema);

module.exports = NewsItem;
