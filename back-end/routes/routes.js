/* 
Routes - establishing the routes for each page in the website: 
*/
const express = require('express');
const router = express.Router();

// route for home page 
router.get('/', (req, res) => {
    res.send('Welcome to the Crime Awareness and Reporting App Home Page');
});

// route to display crime map
router.get('/crime-map', (req, res) => {
    res.send('Page to display the crime-map');
})

// route for form 
router.get('/incident-reporting', (req, res) => {
    res.send('Users will be able to fill the Crime reporting form here');
})

// route for emergency contact page 
router.get('/emergency-contacts', (req, res) => {
    res.send('Page to display information about emergency contacts')
})

// page for community forums page 
router.get('/community-forums', (req, res) => {
    res.send('Community Forums Page');
});


module.exports = router;