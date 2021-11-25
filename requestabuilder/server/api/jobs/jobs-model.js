const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false
    },
    created: {
        type: Boolean,
        required: false
    },
    saved: {
        type: Boolean,
        required: false
    },
    createdBy: {
        type: String,
        required: true
    },
    claimedJob: {
        type: Boolean,
        required: false
    }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;