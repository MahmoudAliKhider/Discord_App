const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail: { type: String, unique: true },
    password: { type: String },
    username: { type: String },
    friends: [{ type: mongoose.Schema.Types.Object, ref: 'User' }],
})

module.exports = mongoose.model('User', userSchema)