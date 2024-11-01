// crimeController.js
const Report = require('../models/Report'); // Adjust the path based on where your models are located
const CrimeReport = require('../models/crimeModels');

// Function to handle the creation of a new crime report
const createReport = async (req, res) => {
    try {
        console.log("Received data:", req.body);
        const { name, email, description, location } = req.body;

        // Create a new report document
        const newReport = new Report({
            name,
            email,
            description,
            location,
            date: new Date(), // Add a date field to record when the report was created
        });

        // Save the report to the database
        await newReport.save();

        res.status(201).json({ message: 'Report successfully created', report: newReport });
    } catch (error) {
        console.error('Error creating report:', error);
        res.status(500).json({ message: 'Failed to create report', error });
    }
};

module.exports = {
    createReport,
};
exports.submitReport = async (req, res) => {
    try {
        const { name, email, description, location } = req.body;
        const newReport = new CrimeReport({ name, email, description, location });
        await newReport.save();
        res.status(201).json({ message: "Report submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to submit report", error: error.message });
    }
};