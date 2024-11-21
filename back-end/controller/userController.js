const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'c45892c8b38d6f209e7eeb478dcbf9a4d150287b9a72634da79ddc7e2c285e7b9fd08be2ee9cfc9aac4f95f80e485b72a653f8912f0b9af952f9a216c6ba7d52';

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use' });
        }

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

// Login a user and return a token
exports.processLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found for email:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch for email:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        console.log('Successful login for email:', email);

        // Generate a token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' } // Token expiration time
        );

        res.status(200).json({
            message: 'Login successful',
            user: { id: user._id, email: user.email },
            token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
