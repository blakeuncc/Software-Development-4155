const express = require('express');
const router = express.Router();
//const Crime = require('../models/crimeModels'); // Import your Crime model
const { createReport, getReports } = require('../controller/crimeController');

// GET route to fetch all crime reports
router.get('/crime-reports', getReports);

// POST route to create a new crime report
router.post('/crime-reports', createReport);

module.exports = router;


module.exports = router;