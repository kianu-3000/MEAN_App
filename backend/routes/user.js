const express = require('express');
const router = express.Router();

const { getUsers, getSingleUser, deleteUser, updateUser } = require('../controllers/userController');

// get users
router.get('/', getUsers);

// get single user
router.get('/:id', getSingleUser);

// delete a user
router.delete('/:id', deleteUser);

// update a user
router.patch('/:id', updateUser);

module.exports = router;