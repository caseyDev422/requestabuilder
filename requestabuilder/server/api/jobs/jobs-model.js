const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true
    },
    price: {
        type: string,
        required: true
    },
    difficulty: {
        type: string,
        required: true
    },
    jobDescription: {
        type: string,
        required: false
    },
    completed: {
        type: boolean,
        required: false
    },
    created: {
        type: boolean,
        required: false
    },
    saved: {
        type: boolean,
        required: false
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;