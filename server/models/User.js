const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: new Date() },
});

module.exports = mongoose.model('User', userSchema);
