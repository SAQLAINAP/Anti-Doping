const mongoose = require('mongoose');

const ForumPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const ForumPost = mongoose.model('ForumPost', ForumPostSchema);

module.exports = ForumPost;
