const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        maxLength: 100,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String
    },
    documents: [String],
})

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile