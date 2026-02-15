const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    receiver: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    content: { 
        type: String, 
        required: true,
        maxlength: 280 // Limit text to ~2 sentences
    },
    status: { 
        type: String, 
        enum: ['sent', 'read'], 
        default: 'sent' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Message', messageSchema);