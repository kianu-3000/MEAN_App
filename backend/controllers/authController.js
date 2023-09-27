const User = require('../models/usersModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utilities/generateToken');
const maxTime = 3 * 24 * 60 * 60

// Login authentication
const login = async (req, res) =>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username: username });
        // check if user exist
        if(!user){
            return res.status(401).json({message: "No such User!"});
        }
        // if user exist then check if user password matches
        await bcrypt.compare(password, user.password, (err, result) =>{
            if(err)
                return res.json({error: "Error in comparing passwords: " + err})

            if(result){
                const token = generateToken(user._id);
                res.cookie('jwt', token, {httpOnly: true, maxAge: maxTime * 1000});
                return res.status(200).json({message: `Logged in as ${user.username}`});
            }

            else
                return res.status(404).json({message: `Password incorrect for user ${user.username}!`});
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
// logout user
const logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
	return res.status(200).json({message: "Logged out"});
};

module.exports = {
    login,
    register,
    logout
};