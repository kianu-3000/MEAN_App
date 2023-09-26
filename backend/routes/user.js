const express = require('express');
const router = express.Router();

const { getUsers, getSingleUser, deleteUser, updateUser, createUser } = require('../controllers/userController');

const person = [

    {
        id: 1,
        name: "Kianu Yepes",
        address: "Lahug",
        content: "Sheesh",
        type: "@Food",
        display: true
    },
    {
        id: 2,
        name: "Post Malone",
        address: "Chicago",
        content: "Meow Meow!",
        type: "@Clothing",
        display: true
    },
    {
        id: 3,
        name: "Lalatina",
        address: "Tokyo, Japan",
        content: "Ahhh! Yamete Onii-chan!!!",
        type: "@Clothing",
        display: true
    }
]
// get users
router.get('/', (req, res) =>{
    res.json(person);
});

// // get single user
// router.get('/:id', getSingleUser);

// // create a user
// router.post('/', createUser);

// // delete a user
// router.delete('/:id', deleteUser);

// // update a user
// router.patch('/:id', updateUser);

module.exports = router;