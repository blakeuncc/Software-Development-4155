const express = require('express');
const router = express.Router();
const Crime = require('../models/crimeModels'); // Import your Crime model

// GET route to fetch all crime reports
router.get('/crime-reports', async (req, res) => {
    try {
        const reports = await Crime.find({}, 'title location date'); // Fetch only necessary fields
        res.json(reports);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve crime reports' });
    }
});

router.post('/crime-reports', async (req, res) => {
    try {
        const { title, location, date } = req.body; // Expecting title, location, and date in the request body
        const newReport = new Crime({
            title,
            location,
            date: date || new Date() // Default to current date if not provided
        });
        await newReport.save();
        res.status(201).json(newReport);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add new crime report', error });
    }
});

module.exports = router;