// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    location: {
        address: {
            type: String,
            required: [true, "Address is required"]
        },
        lat: {
            type: Number,
            required: [true, "Latitude is required"]
        },
        lng: {
            type: Number,
            required: [true, "Longitude is required"]
        }
    },
    createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Report', reportSchema);