const express = require('express');
const router = express.Router(); // Capitalize 'Router'
const { registerController,loginController } = require('../controllers/authController.js'); // Corrected path for controller import


router.post('/register', registerController);
 
router.post('/login',loginController)

module.exports = router;

