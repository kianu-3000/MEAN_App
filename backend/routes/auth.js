const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// login route
router.post('/login', login);

// Register user
router.post('/register', register);

module.exports = router;