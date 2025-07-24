const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Contact form submission
router.post('/contact', contactController.submitContactForm);

module.exports = router;