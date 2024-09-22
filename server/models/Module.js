const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
});

const Module = mongoose.model('Module', ModuleSchema);

module.exports = Module;
