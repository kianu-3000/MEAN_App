const User = require('../models/usersModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utilities/generateToken');

// Login authentication
const login = async (req, res) =>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username: username });
        // check if user exist
        if(!user){
            return res.status(401).json({message: "Authentication Failed"});
        }
        // then check if user password matches
        await bcrypt.compare(password, user.password, (err, result) =>{
            if(err)
                return res.json({error: "Error in comparing passwords: " + err})

            if(result){
                const token = generateToken(user._id);
                return res.status(200).json(token);
            }

            else
                return res.status(404).json({message: "Password Incorrect!"});
        })

    }catch(error){
        return res.status(500).json({message: error});
    }
}

// Register a new user
const register = async (req, res) => {

    const {username, password, address, type, description} = req.body;
    // Add to database
    try{
        // password encryption
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        const pass = hashPassword;

        const user = await User.create({username, password: pass, address, type, description});
        res.status(200).json(user);

    }catch(error){
        res.status(400).json({error: "You suck " + error.message});
    }

}

module.exports = {
    login,
    register
};