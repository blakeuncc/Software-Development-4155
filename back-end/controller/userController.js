const User = require('../models/user');
const bcrypt = require('bcryptjs');

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
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // compare passwords 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // show message based on whether login was successful. 
        res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};