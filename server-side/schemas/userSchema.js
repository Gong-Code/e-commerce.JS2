const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, true: [true, 'Please provide a valid email.'] },
    password: { type: String, true: [true, 'Please provide a password.'] }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema)

module.exports = User