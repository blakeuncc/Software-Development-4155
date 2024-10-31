const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const user = new User(req.body); 
        console.log('Request body:', req.body);
        await user.save(); 
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            console.error('Validation errors:', errors); 
            return res.status(400).json({ message: 'Validation failed', errors });
        }
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Process login logic (to be implemented)
exports.processLogin = async (req, res) => {
    // Add login processing logic here (e.g., password verification, user lookup)
    res.send('process login here');
};
