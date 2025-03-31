const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    category: {
        type: String,
        enum: ['salary', 'freelancing', 'investments', 'bitcoin', 'bank', 'youtube', 'other', 'stocks'], // Add 'stocks'
        required: true,
    },
    description: {
        type: String,
        trim: true,
        maxLength: 200
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Income', incomeSchema);