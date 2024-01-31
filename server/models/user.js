const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail: { type: String, unique: true },
    password: { type: String },
    username: { type: String },
})

module.exports = mongoose.model('User', userSchema)