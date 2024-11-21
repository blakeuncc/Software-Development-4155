// crimeController.js
const Report = require('../models/Report');

// Function to create a new crime report (old code)
// const createReport = async (req, res) => {
//     try {
//         const { name, email, description, location } = req.body;

//         // Create a new crime report
//         const newReport = new Report({
//             name,
//             email,
//             description,
//             location: {
//                 address: location.address,
//                 lat: location.lat, // Placeholder, update with real coordinates if available
//                 lng: location.lng, // Placeholder
//             },
//             //date: date || new Date() // Default to current date if not provided
//         });

//         // Save the report to the database
//         await newReport.save();
//         res.status(201).json({ message: 'Crime report submitted successfully', newReport });
//     } catch (error) {
//         console.error('Error creating crime report:', error);
//         res.status(500).json({ message: 'Error creating crime report', error });
//     }
// };

const createReport = async (req, res) => {
    try {
        const { name, email, description, location } = req.body;

        // Create a new crime report
        const newReport = new Report({
            name,
            email,
            description,
            location: {
                address: location?.address,
                lat: location?.lat,
                lng: location?.lng,
            },
        });

        //date: date || new Date() // Default to current date if not provided
        
        const savedReport = await newReport.save();
        res.status(201).json(savedReport); // Return the saved report directly
    } catch (error) {
        console.error('Error creating crime report:', error);
        res.status(500).json({ message: 'Error creating crime report', error });
    }
};


const getReports = async (req, res) => {
    try {
        const reports = await Report.find({}, 'name email description location createdAt'); // Include necessary fields
        res.json(reports);
    } catch (err) {
        console.error('Error fetching crime reports:', err);
        res.status(500).json({ message: 'Failed to retrieve crime reports' });
    }
};

module.exports = { createReport, getReports };
