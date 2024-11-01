const mongoose = require('mongoose');

const crimeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Crime', crimeSchema);