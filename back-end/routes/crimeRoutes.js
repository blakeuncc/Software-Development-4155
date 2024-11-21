const express = require('express');
const router = express.Router();
//const Crime = require('../models/crimeModels'); // Import your Crime model
const Report = require('../models/Report');
const crimeController = require('../controller/crimeController');
const { createReport} = require('../controller/crimeController');


// GET route to fetch all crime reports
router.get('/crime-reports', async (req, res) => {
    try {
        const reports = await Report.find({}, 'title location date'); // Fetch only necessary fields
        res.json(reports);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve crime reports' });
    }
});
router.post('/crime-reports', crimeController.createReport);
router.post('/crime-reports', async (req, res) => {
    try {
        const { name, email, description, location, date } = req.body;
        const newReport = new Report({
            name,
            email,
            description,
            location: {
                address: location,
                lat: 0,
                lng: 0
            },
            date: date || new Date() // Default to current date if not provided
        });
        await newReport.save();
        res.status(201).json(newReport);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add new crime report', error });
    }
});

module.exports = router;