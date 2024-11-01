// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },

});

module.exports = mongoose.model('Report', reportSchema);
