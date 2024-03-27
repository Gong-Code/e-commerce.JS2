const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Please provide a name.'] },
    email: { type: String, required: [true, 'Please provide a valid email'] },
    message: { 
        type: String, 
        minlength: [5, 'Your message must be at least 5 characters long.'], 
        maxlength: [200, 'Your message must be less than 200 characters.'], 
        required: [true, 'Please provide a message.']  
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message