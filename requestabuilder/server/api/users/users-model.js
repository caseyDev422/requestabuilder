const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    associatedJobs: []
});

const User = mongoose.model('User', UserSchema);

module.exports = User;