const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.processLogin);

module.exports = router;
