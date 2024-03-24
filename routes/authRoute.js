const express = require('express');
const router = express.Router(); // Capitalize 'Router'
const { registerController } = require('../controllers/authController.js'); // Corrected path for controller import

// REGISTER ROUTE
router.post('/register', registerController);

module.exports = router; // Correct way to export router
