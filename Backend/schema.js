const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please fill a valid email address'],
    },
    massage: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("contact", contactSchema);