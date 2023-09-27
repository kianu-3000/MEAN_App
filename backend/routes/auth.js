const express = require('express');
const router = express.Router();
const { login, register, logout } = require('../controllers/authController');

// login route
router.post('/login', login);

// Register user
router.post('/register', register);

// logout user
router.get('/logout', logout);

module.exports = router;